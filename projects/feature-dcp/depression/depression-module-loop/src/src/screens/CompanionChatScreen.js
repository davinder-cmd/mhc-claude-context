/**
 * Companion Interaction — S1M1 (Tier 3)
 *
 * Fully bounded pre-approved responses. No AI generation.
 * Flow: companion prompt → user types → keyword match → bounded response.
 * Escalation check runs FIRST on every user input.
 *
 * Tier 3 rules enforced:
 * - No open-ended questions about symptoms
 * - One reflection, then pivot to completion
 * - Escalation trigger active
 * - "Being seen" tone, not celebratory
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from 'react-native';
import {
  S1M1_COMPANION_PROMPT,
  ESCALATION_RESPONSE,
} from '../data/companionResponses';
import { useJourneyStore } from '../store/journeyStore';
import { detectEscalation } from '../utils/escalationDetector';
import { matchBranch } from '../utils/branchMatcher';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

function TypingIndicator() {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
    return () => animation.stop();
  }, []);

  return (
    <View style={styles.companionBubble}>
      <Animated.View style={[styles.typingDots, { opacity }]}>
        <View style={styles.typingDot} />
        <View style={styles.typingDot} />
        <View style={styles.typingDot} />
      </Animated.View>
    </View>
  );
}

function CompanionMessage({ text }) {
  return (
    <View style={styles.companionBubble}>
      <Text style={styles.companionText}>{text}</Text>
    </View>
  );
}

function UserMessage({ text }) {
  return (
    <View style={styles.userBubble}>
      <Text style={styles.userText}>{text}</Text>
    </View>
  );
}

function EscalationCard() {
  return (
    <View style={styles.escalationCard}>
      <Text style={styles.escalationMessage}>
        {ESCALATION_RESPONSE.message}
      </Text>
      <View style={styles.resourcesContainer}>
        {ESCALATION_RESPONSE.resources.map((resource, i) => (
          <View key={i} style={styles.resourceRow}>
            <Text style={styles.resourceAction}>{resource.action}</Text>
            <Text style={styles.resourceLabel}>
              {resource.label} · {resource.detail}
            </Text>
          </View>
        ))}
      </View>
      <Text style={styles.escalationClosing}>
        {ESCALATION_RESPONSE.closing}
      </Text>
    </View>
  );
}

export default function CompanionChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showTyping, setShowTyping] = useState(true);
  const [hasResponded, setHasResponded] = useState(false);
  const [isEscalated, setIsEscalated] = useState(false);
  const scrollViewRef = useRef(null);

  const advanceStep = useJourneyStore((s) => s.advanceStep);
  const recordCompanionInteraction = useJourneyStore(
    (s) => s.recordCompanionInteraction,
  );
  const triggerEscalation = useJourneyStore((s) => s.triggerEscalation);

  // Show companion prompt with typing indicator delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
      setMessages([{ type: 'companion', text: S1M1_COMPANION_PROMPT }]);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputText.trim() || hasResponded || isEscalated) return;

    const userText = inputText.trim();
    const updatedMessages = [
      ...messages,
      { type: 'user', text: userText },
    ];
    setMessages(updatedMessages);
    setInputText('');

    // ── ESCALATION CHECK FIRST ─────────────────────────
    if (detectEscalation(userText)) {
      setIsEscalated(true);
      triggerEscalation();
      setMessages([
        ...updatedMessages,
        { type: 'escalation' },
      ]);
      return;
    }

    // ── BOUNDED RESPONSE SELECTION ─────────────────────
    setShowTyping(true);
    setTimeout(() => {
      const { branchId, response } = matchBranch(userText);
      recordCompanionInteraction(userText, response);
      setShowTyping(false);
      setHasResponded(true);
      setMessages([
        ...updatedMessages,
        { type: 'companion', text: response },
      ]);
    }, 1200); // Simulate typing delay for natural feel
  };

  const handleContinue = () => {
    advanceStep();
    navigation.navigate('CompletionMoment');
  };

  const handleReturnToMap = () => {
    navigation.navigate('JourneyMap');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.companionAvatar}>
          <Text style={styles.avatarText}>🌱</Text>
        </View>
        <View>
          <Text style={styles.headerTitle}>Your Companion</Text>
          <Text style={styles.headerSubtitle}>
            Here to reflect with you, not advise
          </Text>
        </View>
      </View>

      {/* Messages */}
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={100}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map((msg, i) => {
            if (msg.type === 'companion') {
              return <CompanionMessage key={i} text={msg.text} />;
            }
            if (msg.type === 'user') {
              return <UserMessage key={i} text={msg.text} />;
            }
            if (msg.type === 'escalation') {
              return <EscalationCard key={i} />;
            }
            return null;
          })}
          {showTyping && <TypingIndicator />}
        </ScrollView>

        {/* Input or continue */}
        <View style={styles.bottomBar}>
          {isEscalated ? (
            <TouchableOpacity
              style={styles.returnButton}
              onPress={handleReturnToMap}
              accessible
              accessibilityRole="button"
              accessibilityLabel="Return to your journey when ready"
            >
              <Text style={styles.returnButtonText}>
                Continue when you're ready
              </Text>
            </TouchableOpacity>
          ) : hasResponded ? (
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
              accessible
              accessibilityRole="button"
              accessibilityLabel="Continue to completion"
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Type your response..."
                placeholderTextColor={colors.warmGray}
                value={inputText}
                onChangeText={setInputText}
                multiline
                maxLength={500}
                editable={!showTyping}
                accessible
                accessibilityLabel="Your response to the companion"
              />
              <TouchableOpacity
                style={[
                  styles.sendButton,
                  !inputText.trim() && styles.sendButtonDisabled,
                ]}
                onPress={handleSend}
                disabled={!inputText.trim() || showTyping}
                accessible
                accessibilityRole="button"
                accessibilityLabel="Send response"
              >
                <Text style={styles.sendButtonText}>→</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* AI disclaimer — always visible */}
          <Text style={styles.disclaimer}>
            AI companion · Not medical advice · Pre-approved responses only
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.warmWhite,
  },
  flex: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.cardBorder,
  },
  companionAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.softCream,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 22,
  },
  headerTitle: {
    ...typography.h3,
    color: colors.deepCharcoal,
  },
  headerSubtitle: {
    ...typography.caption,
    color: colors.warmGray,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: 24,
    gap: 16,
  },
  companionBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.softCream,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 18,
    borderTopLeftRadius: 4,
    maxWidth: '85%',
  },
  companionText: {
    ...typography.companionMessage,
    color: colors.deepCharcoal,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.softTeal,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 18,
    borderTopRightRadius: 4,
    maxWidth: '85%',
  },
  userText: {
    ...typography.body,
    color: '#FFFFFF',
  },
  typingDots: {
    flexDirection: 'row',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.warmGray,
  },
  escalationCard: {
    backgroundColor: '#FFF8F0',
    borderWidth: 1,
    borderColor: colors.softCoral,
    borderRadius: 18,
    padding: 20,
    alignSelf: 'stretch',
  },
  escalationMessage: {
    ...typography.body,
    color: colors.deepCharcoal,
    marginBottom: 16,
  },
  resourcesContainer: {
    gap: 12,
    marginBottom: 16,
  },
  resourceRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
  },
  resourceAction: {
    ...typography.h3,
    color: colors.deepCharcoal,
    marginBottom: 2,
  },
  resourceLabel: {
    ...typography.bodySmall,
    color: colors.warmGray,
  },
  escalationClosing: {
    ...typography.body,
    color: colors.deepCharcoal,
    fontStyle: 'italic',
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.cardBorder,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  input: {
    flex: 1,
    ...typography.body,
    color: colors.deepCharcoal,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 12,
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.buttonPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: colors.upcoming,
  },
  sendButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  continueButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    ...typography.button,
    color: colors.buttonPrimaryText,
  },
  returnButton: {
    backgroundColor: colors.softCream,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  returnButtonText: {
    ...typography.button,
    color: colors.deepCharcoal,
  },
  disclaimer: {
    ...typography.caption,
    color: colors.warmGray,
    textAlign: 'center',
    marginTop: 10,
  },
});
