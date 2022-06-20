// デフォルトのカラーのみ定義する場合
import type { DefaultMantineColor, Tuple } from "@mantine/core";

import type { otherTheme } from "~/libs/mantine/theme.config";

type OtherTheme = typeof otherTheme;

type ExtendedCustomColors = "bright-pink" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
  export interface MantineThemeOther extends OtherTheme {}
}

// 独自のカラーを拡張して独自のカラーを定義する場合
// import { Tuple } from "@mantine/core";
// type CustomColors = "primaryColorName" | "secondaryColorName";
// declare module "@mantine/core" {
//   export interface MantineThemeColorsOverride {
//     colors: Record<CustomColors, Tuple<string, 10>>;
//   }
// }
