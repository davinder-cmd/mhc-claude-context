/**
 * Typography scale
 * Human, readable, warm. System fonts for prototype;
 * swap to custom faces (e.g., DM Sans, Source Serif) in production.
 */

import { Platform } from 'react-native';

const fontFamily = Platform.select({
  ios: 'System',
  android: 'Roboto',
  default: 'System',
});

export const typography = {
  // Headings
  h1: { fontFamily, fontSize: 28, fontWeight: '700', lineHeight: 36, letterSpacing: -0.3 },
  h2: { fontFamily, fontSize: 22, fontWeight: '600', lineHeight: 30, letterSpacing: -0.2 },
  h3: { fontFamily, fontSize: 18, fontWeight: '600', lineHeight: 26 },

  // Body
  body: { fontFamily, fontSize: 16, fontWeight: '400', lineHeight: 24 },
  bodySmall: { fontFamily, fontSize: 14, fontWeight: '400', lineHeight: 21 },

  // UI
  label: { fontFamily, fontSize: 13, fontWeight: '500', lineHeight: 18, letterSpacing: 0.2 },
  caption: { fontFamily, fontSize: 12, fontWeight: '400', lineHeight: 16 },
  button: { fontFamily, fontSize: 16, fontWeight: '600', lineHeight: 22 },

  // Companion
  companionMessage: { fontFamily, fontSize: 16, fontWeight: '400', lineHeight: 24 },
  companionPrompt: { fontFamily, fontSize: 16, fontWeight: '400', lineHeight: 24, fontStyle: 'italic' },

  // Badge
  badgeName: { fontFamily, fontSize: 20, fontWeight: '700', lineHeight: 28, letterSpacing: 0.3 },
};
