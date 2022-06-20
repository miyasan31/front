import type { MantineThemeOverride } from "@mantine/core";

export const breakpointsTheme = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1000,
  xl: 1400,
} as const;

export const otherTheme = {
  fontFamilySecondary: "Arial",
  lineHeights: [1.2, 1.4, 1.6, 1.8, 1.95],
  reduceMotion: true,
  myCustomFunction: () => {
    console.info("myCustomFunction");
  },
};

export const customTheme: MantineThemeOverride = {
  primaryColor: "orange",
  colors: {
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
  breakpoints: breakpointsTheme,
  fontFamily: "Open Sans",
  other: otherTheme,
};
