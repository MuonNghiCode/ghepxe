export const colors = {
  primaryGreen: '#00B894',
  secondaryGreen: '#00D1A3',
  white: '#FFFFFF',
  lightGray: '#F2F2F2',
  darkGray: '#333333',
  textBlack: '#1A1A1A',
} as const;

export type ColorKey = keyof typeof colors;
