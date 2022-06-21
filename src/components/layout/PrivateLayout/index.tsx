/* eslint-disable react/jsx-handler-names */
import { ActionIcon, AppShell, MediaQuery, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { FC, ReactNode } from "react";
import { Menu2 } from "tabler-icons-react";

import { DrawerNav } from "~/components/layout/PrivateLayout/DrawerNav";
import { SideEditor } from "~/components/layout/PrivateLayout/SideEditor";
import { SideNav } from "~/components/layout/PrivateLayout/SideNav";
import { useMediaQuery } from "~/libs/mantine/hooks/useMediaQuery";

type Props = {
  children: ReactNode;
};

export const PrivateLayout: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const largerThanSm = useMediaQuery("sm");
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      fixed
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbar={
        largerThanSm ? (
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <SideNav type="nav" />
          </MediaQuery>
        ) : (
          <DrawerNav opened={opened} handleClose={handlers.close} />
        )
      }
      aside={
        largerThanSm ? (
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <SideEditor />
          </MediaQuery>
        ) : undefined
      }
      header={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <ActionIcon variant="hover" radius="xl" size={40} onClick={handlers.open}>
            <Menu2 />
          </ActionIcon>
        </MediaQuery>
      }
    >
      {children}
    </AppShell>
  );
};
