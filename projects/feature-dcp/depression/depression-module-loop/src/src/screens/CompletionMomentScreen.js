/**
 * Completion Moment — S1M1
 *
 * Tier 3 tone: "being seen", not celebrated.
 * No confetti. Warm glow animation. Specific copy.
 * Identity badge: "Resilience Aware"
 * Single tap to proceed — no friction at reward moment.
 */

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
} from 'react-native';
import { S1M1_COMPLETION, FIRST_MODULE_KUDO } from '../data/companionResponses';
import { useJourneyStore } from '../store/journeyStore';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function CompletionMomentScreen({ navigation }) {
  const completeModule = useJourneyStore((s) => s.completeModule);

  // Warm glow animation — slow fade-in, not a burst
  const glowOpacity = useRef(new Animated.Value(0)).current;
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const badgeScale = useRef(new Animated.Value(0.8)).current;
  const kudoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Staggered reveal: glow → badge → message → kudo
    Animated.sequence([
      Animated.timing(glowOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(contentOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(badgeScale, {
          toValue: 1,
          tension: 40,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(kudoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleContinue = () => {
    completeModule();
    navigation.navigate('JourneyMap');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Warm glow background */}
      <Animated.View
        style={[styles.glowBackground, { opacity: glowOpacity }]}
      />

      <View style={styles.content}>
        {/* Badge */}
        <Animated.View
          style={[
            styles.badgeContainer,
            {
              opacity: contentOpacity,
              transform: [{ scale: badgeScale }],
            },
          ]}
        >
          <View style={styles.badgeCircle}>
            <Text style={styles.badgeIcon}>🌿</Text>
          </View>
          <Text style={styles.badgeName}>{S1M1_COMPLETION.badgeName}</Text>
        </Animated.View>

        {/* Completion message — specific, warm, grounded */}
        <Animated.View style={{ opacity: contentOpacity }}>
          <Text style={styles.completionMessage}>
            {S1M1_COMPLETION.message}
          </Text>
        </Animated.View>

        {/* First module milestone kudo */}
        <Animated.View style={[styles.kudoContainer, { opacity: kudoOpacity }]}>
          <View style={styles.kudoDivider} />
          <Text style={styles.kudoText}>{FIRST_MODULE_KUDO}</Text>
        </Animated.View>
      </View>

      {/* Continue — single tap, no friction */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue to your journey map"
        >
          <Text style={styles.continueButtonText}>See your journey</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.warmWhite,
  },
  glowBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F5F0E8',
    // In production: replace with radial gradient or Lottie glow
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  badgeCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.paleLavender + '30', // 30% opacity
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colors.paleLavender,
  },
  badgeIcon: {
    fontSize: 44,
  },
  badgeName: {
    ...typography.badgeName,
    color: colors.deepCharcoal,
  },
  completionMessage: {
    ...typography.body,
    color: colors.deepCharcoal,
    textAlign: 'center',
    lineHeight: 26,
  },
  kudoContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  kudoDivider: {
    width: 40,
    height: 2,
    backgroundColor: colors.gentleAmber,
    marginBottom: 16,
  },
  kudoText: {
    ...typography.body,
    color: colors.warmGray,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  continueButton: {
    backgroundColor: colors.gentleAmber,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    ...typography.button,
    color: '#FFFFFF',
  },
});
