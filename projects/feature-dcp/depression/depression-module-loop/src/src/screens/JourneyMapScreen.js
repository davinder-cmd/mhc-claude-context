/**
 * Journey Map — Home Screen
 *
 * The spine of the experience. Shows all 10 sessions as nodes on a
 * vertical path. Three visual states: done, active, upcoming.
 * Design direction: trail/road, not checklist. Landmarks, not line items.
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { useJourneyStore } from '../store/journeyStore';
import { SESSIONS } from '../data/depressionContent';
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

function SessionNode({ session, state, onPress, isLast }) {
  const isDone = state === 'done';
  const isActive = state === 'active';

  return (
    <View style={styles.nodeContainer}>
      {/* Connecting line (trail) */}
      {!isLast && (
        <View
          style={[
            styles.trailLine,
            isDone && styles.trailLineDone,
            isActive && styles.trailLineActive,
          ]}
        />
      )}

      <TouchableOpacity
        style={[
          styles.node,
          isDone && styles.nodeDone,
          isActive && styles.nodeActive,
          !isDone && !isActive && styles.nodeUpcoming,
        ]}
        onPress={isActive ? onPress : undefined}
        activeOpacity={isActive ? 0.7 : 1}
        accessible
        accessibilityRole={isActive ? 'button' : 'text'}
        accessibilityLabel={`Session ${session.number}: ${session.title}. ${
          isDone ? 'Completed' : isActive ? 'Ready to start' : 'Coming up'
        }`}
      >
        {/* Session number circle */}
        <View
          style={[
            styles.numberCircle,
            isDone && styles.numberCircleDone,
            isActive && styles.numberCircleActive,
          ]}
        >
          {isDone ? (
            <Text style={styles.checkmark}>✓</Text>
          ) : (
            <Text
              style={[
                styles.numberText,
                isActive && styles.numberTextActive,
              ]}
            >
              {session.number}
            </Text>
          )}
        </View>

        {/* Session info */}
        <View style={styles.nodeContent}>
          <Text
            style={[
              styles.nodeTitle,
              isDone && styles.nodeTitleDone,
              !isDone && !isActive && styles.nodeTitleUpcoming,
            ]}
          >
            {session.title}
          </Text>
          <Text
            style={[
              styles.nodeDescription,
              !isDone && !isActive && styles.nodeDescriptionUpcoming,
            ]}
          >
            {session.description}
          </Text>
          {isActive && (
            <View style={styles.activeIndicator}>
              <Text style={styles.activeText}>Ready to start</Text>
            </View>
          )}
          {isDone && (
            <Text style={styles.doneText}>Completed</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function JourneyMapScreen({ navigation }) {
  const sessionStates = useJourneyStore((s) => s.sessionStates);

  const handleSessionPress = (session) => {
    if (session.id === 's1') {
      navigation.navigate('ModuleEntry');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Your Journey</Text>
        <Text style={styles.subtitle}>Managing Depression · 10 sessions</Text>
      </View>

      {/* Journey path */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {SESSIONS.map((session, index) => (
          <SessionNode
            key={session.id}
            session={session}
            state={sessionStates[session.id]}
            onPress={() => handleSessionPress(session)}
            isLast={index === SESSIONS.length - 1}
          />
        ))}

        {/* Finish line */}
        <View style={styles.finishLine}>
          <Text style={styles.finishText}>Program Complete</Text>
          <Text style={styles.finishSubtext}>
            You'll see the finish line from here — that's intentional.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.warmWhite,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  greeting: {
    ...typography.h1,
    color: colors.deepCharcoal,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.warmGray,
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  nodeContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  trailLine: {
    position: 'absolute',
    left: 23,
    top: 48,
    bottom: -8,
    width: 2,
    backgroundColor: colors.upcoming,
  },
  trailLineDone: {
    backgroundColor: colors.done,
  },
  trailLineActive: {
    backgroundColor: colors.active,
  },
  node: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 16,
  },
  nodeDone: {
    opacity: 0.7,
  },
  nodeActive: {
    backgroundColor: colors.softCream,
    borderWidth: 1,
    borderColor: colors.active,
  },
  nodeUpcoming: {
    opacity: 0.5,
  },
  numberCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.upcoming,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  numberCircleDone: {
    backgroundColor: colors.done,
  },
  numberCircleActive: {
    backgroundColor: colors.active,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  numberText: {
    ...typography.label,
    color: colors.warmGray,
  },
  numberTextActive: {
    color: '#FFFFFF',
  },
  nodeContent: {
    flex: 1,
  },
  nodeTitle: {
    ...typography.h3,
    color: colors.deepCharcoal,
  },
  nodeTitleDone: {
    color: colors.warmGray,
  },
  nodeTitleUpcoming: {
    color: colors.warmGray,
  },
  nodeDescription: {
    ...typography.bodySmall,
    color: colors.warmGray,
    marginTop: 2,
  },
  nodeDescriptionUpcoming: {
    color: colors.upcoming,
  },
  activeIndicator: {
    marginTop: 8,
    backgroundColor: colors.active,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  activeText: {
    ...typography.label,
    color: '#FFFFFF',
  },
  doneText: {
    ...typography.caption,
    color: colors.done,
    marginTop: 4,
  },
  finishLine: {
    alignItems: 'center',
    paddingVertical: 32,
    marginTop: 16,
    borderTopWidth: 2,
    borderTopColor: colors.cardBorder,
    borderStyle: 'dashed',
  },
  finishText: {
    ...typography.h3,
    color: colors.upcoming,
  },
  finishSubtext: {
    ...typography.caption,
    color: colors.upcoming,
    marginTop: 4,
    textAlign: 'center',
  },
});
