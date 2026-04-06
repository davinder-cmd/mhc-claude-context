/**
 * Depression Module Loop — Prototype
 *
 * Full loop: Journey Map → Entry → Content → Check-in → Companion → Completion → Map
 * Module: S1M1 "What is Depression?" (Tier 3)
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import JourneyMapScreen from './src/screens/JourneyMapScreen';
import ModuleEntryScreen from './src/screens/ModuleEntryScreen';
import ContentCardsScreen from './src/screens/ContentCardsScreen';
import MicroCheckinScreen from './src/screens/MicroCheckinScreen';
import CompanionChatScreen from './src/screens/CompanionChatScreen';
import CompletionMomentScreen from './src/screens/CompletionMomentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="JourneyMap"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          contentStyle: { backgroundColor: '#FAF7F2' },
        }}
      >
        <Stack.Screen name="JourneyMap" component={JourneyMapScreen} />
        <Stack.Screen name="ModuleEntry" component={ModuleEntryScreen} />
        <Stack.Screen name="ContentCards" component={ContentCardsScreen} />
        <Stack.Screen name="MicroCheckin" component={MicroCheckinScreen} />
        <Stack.Screen name="CompanionChat" component={CompanionChatScreen} />
        <Stack.Screen name="CompletionMoment" component={CompletionMomentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
