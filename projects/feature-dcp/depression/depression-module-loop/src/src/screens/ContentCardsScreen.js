/**
 * Content Cards — S1M1: "What is Depression?"
 *
 * One concept per card, swipe/tap to advance.
 * Final card includes crisis resource callout.
 * No timers — Tier 3 constraint.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
} from 'react-native';
import { S1M1 } from '../data/depressionContent';
import { useJourneyStore } from '../store/journeyStore';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

function ProgressDots({ total, current }) {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            i === current && styles.dotActive,
            i < current && styles.dotDone,
          ]}
        />
      ))}
    </View>
  );
}

export default function ContentCardsScreen({ navigation }) {
  const [cardIndex, setCardIndex] = useState(0);
  const advanceStep = useJourneyStore((s) => s.advanceStep);

  const allCards = S1M1.contentCards;
  const totalCards = allCards.length + 1; // +1 for crisis callout card
  const isLastContentCard = cardIndex === allCards.length - 1;
  const isCrisisCard = cardIndex === allCards.length;

  const handleNext = () => {
    if (isCrisisCard) {
      // Done with content — advance to check-in
      advanceStep();
      navigation.navigate('MicroCheckin');
    } else {
      setCardIndex(cardIndex + 1);
    }
  };

  const currentCard = isCrisisCard ? null : allCards[cardIndex];

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress */}
      <View style={styles.topBar}>
        <ProgressDots total={totalCards} current={cardIndex} />
        <Text style={styles.progressText}>
          {cardIndex + 1} of {totalCards}
        </Text>
      </View>

      {/* Card content */}
      <View style={styles.cardContainer}>
        {isCrisisCard ? (
          // Crisis resource card — always shown as final content card
          <View style={[styles.card, styles.crisisCard]}>
            <View style={styles.crisisIconContainer}>
              <Text style={styles.crisisIcon}>💛</Text>
            </View>
            <Text style={styles.crisisTitle}>Before we continue</Text>
            <Text style={styles.crisisBody}>
              {S1M1.crisisCallout.body}
            </Text>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardBody}>{currentCard.body}</Text>
          </View>
        )}
      </View>

      {/* Navigation */}
      <View style={styles.bottomBar}>
        {cardIndex > 0 && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setCardIndex(cardIndex - 1)}
            accessible
            accessibilityRole="button"
            accessibilityLabel="Go to previous card"
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          accessible
          accessibilityRole="button"
          accessibilityLabel={isCrisisCard ? 'Continue to reflection' : 'Next card'}
        >
          <Text style={styles.nextButtonText}>
            {isCrisisCard ? 'Continue' : 'Next'}
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.upcoming,
  },
  dotActive: {
    backgroundColor: colors.active,
    width: 24,
  },
  dotDone: {
    backgroundColor: colors.done,
  },
  progressText: {
    ...typography.caption,
    color: colors.warmGray,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: colors.softCream,
    borderRadius: 20,
    padding: 28,
  },
  cardBody: {
    ...typography.body,
    color: colors.deepCharcoal,
  },
  crisisCard: {
    backgroundColor: '#FFF8F0',
    borderWidth: 1,
    borderColor: colors.softCoral,
  },
  crisisIconContainer: {
    marginBottom: 16,
  },
  crisisIcon: {
    fontSize: 28,
  },
  crisisTitle: {
    ...typography.h3,
    color: colors.deepCharcoal,
    marginBottom: 12,
  },
  crisisBody: {
    ...typography.body,
    color: colors.deepCharcoal,
    lineHeight: 26,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 16,
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  backButtonText: {
    ...typography.button,
    color: colors.warmGray,
  },
  nextButton: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  nextButtonText: {
    ...typography.button,
    color: colors.buttonPrimaryText,
  },
});
