import type { MantineThemeOverride } from "@mantine/core";

export const breakpointsTheme = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1000,
  xl: 1400,
} as const;

export const otherTheme = {
  lineHeights: [1.2, 1.4, 1.6, 1.8, 1.95],
  reduceMotion: true,
  myCustomFunction: () => {},
};

export const customTheme: MantineThemeOverride = {
  colors: {},
  breakpoints: breakpointsTheme,
  other: otherTheme,
};
