import {
  ColorSchemeProvider as MantineColorSchemeProvider,
  MantineProvider as MantineThemeProvider,
} from "@mantine/core";
import type { FC, ReactNode } from "react";

import { useColorScheme } from "~/libs/mantine/hook/useColorScheme";
import { customTheme } from "~/libs/mantine/theme.config";

type Props = {
  children: ReactNode;
};

export const MantineProvider: FC<Props> = ({ children }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <MantineColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineThemeProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...customTheme, colorScheme }}
        emotionOptions={{ key: "mantine", prepend: false }}
      >
        {children}
      </MantineThemeProvider>
    </MantineColorSchemeProvider>
  );
};
