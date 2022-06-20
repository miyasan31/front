import { AppShell, useMantineTheme } from "@mantine/core";
import type { FC, ReactNode } from "react";
import { useCallback, useState } from "react";

import { Aside } from "~/components/layout/PrivateLayout/Aside";
import { Header } from "~/components/layout/PrivateLayout/Header";
import { Navbar } from "~/components/layout/PrivateLayout/Navbar";

type Props = {
  children: ReactNode;
};

export const PrivateLayout: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const handleNavbarToggle = useCallback(() => {
    setOpened((prev) => !prev);
  }, []);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={<Navbar opened={opened} />}
      aside={<Aside />}
      header={<Header opened={opened} onToggle={handleNavbarToggle} />}
    >
      {children}
    </AppShell>
  );
};
