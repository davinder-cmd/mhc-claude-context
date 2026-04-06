/**
 * Module Entry Card — S1M1: "What is Depression?"
 *
 * Breathe-first, task-second pattern (per Headspace reference).
 * Warm framing sentence before asking anything of the user.
 * No timers, no urgency — Tier 3 constraint.
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { S1M1 } from '../data/depressionContent';
import { useJourneyStore } from '../store/journeyStore';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

export default function ModuleEntryScreen({ navigation }) {
  const advanceStep = useJourneyStore((s) => s.advanceStep);

  const handleBegin = () => {
    advanceStep();
    navigation.navigate('ContentCards');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Spacer — breathe-first pattern */}
      <View style={styles.spacer} />

      {/* Session indicator */}
      <View style={styles.sessionPill}>
        <Text style={styles.sessionText}>Session 1 of 10</Text>
      </View>

      {/* Module card */}
      <View style={styles.card}>
        {/* Icon placeholder — warm illustration goes here */}
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconEmoji}>🌿</Text>
        </View>

        <Text style={styles.title}>{S1M1.entryCard.title}</Text>
        <Text style={styles.subtitle}>{S1M1.entryCard.subtitle}</Text>

        {/* Warm framing sentence */}
        <Text style={styles.framing}>{S1M1.entryCard.framingSentence}</Text>
      </View>

      {/* Begin button */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.beginButton}
          onPress={handleBegin}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Begin this module"
        >
          <Text style={styles.beginButtonText}>Begin</Text>
        </TouchableOpacity>

        {/* Time estimate — no pressure copy */}
        <Text style={styles.timeEstimate}>
          About {S1M1.estimatedMinutes} minutes · Go at your own pace
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.warmWhite,
    paddingHorizontal: 24,
  },
  spacer: {
    flex: 0.15,
  },
  sessionPill: {
    alignSelf: 'center',
    backgroundColor: colors.softCream,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 32,
  },
  sessionText: {
    ...typography.label,
    color: colors.warmGray,
  },
  card: {
    alignItems: 'center',
    flex: 1,
  },
  iconPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.softCream,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  iconEmoji: {
    fontSize: 36,
  },
  title: {
    ...typography.h1,
    color: colors.deepCharcoal,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.warmGray,
    textAlign: 'center',
    marginBottom: 24,
  },
  framing: {
    ...typography.body,
    color: colors.deepCharcoal,
    textAlign: 'center',
    lineHeight: 26,
    paddingHorizontal: 16,
  },
  bottomSection: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  beginButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  beginButtonText: {
    ...typography.button,
    color: colors.buttonPrimaryText,
  },
  timeEstimate: {
    ...typography.caption,
    color: colors.warmGray,
  },
});
