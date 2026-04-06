/**
 * Micro Check-in — S1M1
 *
 * 1–2 reflection questions, NOT graded.
 * One question per screen (Ada Health pattern).
 * Warm, conversational tone. No timers.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { S1M1_CHECKIN_QUESTIONS } from '../data/companionResponses';
import { useJourneyStore } from '../store/journeyStore';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function MicroCheckinScreen({ navigation }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const setCheckinAnswer = useJourneyStore((s) => s.setCheckinAnswer);
  const advanceStep = useJourneyStore((s) => s.advanceStep);

  const questions = S1M1_CHECKIN_QUESTIONS;
  const currentQuestion = questions[questionIndex];
  const isLast = questionIndex === questions.length - 1;

  const handleSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    if (!selectedOption) return;

    setCheckinAnswer(currentQuestion.id, selectedOption);

    if (isLast) {
      advanceStep();
      navigation.navigate('CompanionChat');
    } else {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Quick reflection</Text>
        <Text style={styles.headerProgress}>
          {questionIndex + 1} of {questions.length}
        </Text>
      </View>

      {/* Question */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.text}</Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOption === option.id;
            return (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.option,
                  isSelected && styles.optionSelected,
                ]}
                onPress={() => handleSelect(option.id)}
                accessible
                accessibilityRole="radio"
                accessibilityState={{ selected: isSelected }}
                accessibilityLabel={option.label}
              >
                <View
                  style={[
                    styles.radio,
                    isSelected && styles.radioSelected,
                  ]}
                >
                  {isSelected && <View style={styles.radioInner} />}
                </View>
                <Text
                  style={[
                    styles.optionText,
                    isSelected && styles.optionTextSelected,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Continue button */}
      <View style={styles.bottomBar}>
        <Text style={styles.reassurance}>
          There are no wrong answers here.
        </Text>
        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedOption && styles.continueButtonDisabled,
          ]}
          onPress={handleContinue}
          disabled={!selectedOption}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue"
          accessibilityState={{ disabled: !selectedOption }}
        >
          <Text
            style={[
              styles.continueButtonText,
              !selectedOption && styles.continueButtonTextDisabled,
            ]}
          >
            Continue
          </Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerLabel: {
    ...typography.label,
    color: colors.softTeal,
  },
  headerProgress: {
    ...typography.caption,
    color: colors.warmGray,
  },
  questionContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  questionText: {
    ...typography.h2,
    color: colors.deepCharcoal,
    marginBottom: 32,
  },
  optionsContainer: {
    gap: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.softCream,
    padding: 18,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  optionSelected: {
    borderColor: colors.active,
    backgroundColor: '#F0F7F7',
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.inputBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  radioSelected: {
    borderColor: colors.active,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.active,
  },
  optionText: {
    ...typography.body,
    color: colors.deepCharcoal,
    flex: 1,
  },
  optionTextSelected: {
    fontWeight: '500',
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  reassurance: {
    ...typography.caption,
    color: colors.warmGray,
    marginBottom: 12,
  },
  continueButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: colors.upcoming,
  },
  continueButtonText: {
    ...typography.button,
    color: colors.buttonPrimaryText,
  },
  continueButtonTextDisabled: {
    color: colors.warmGray,
  },
});
