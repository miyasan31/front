import { Burger, Header as MantineHeader, Text, useMantineTheme } from "@mantine/core";
import type { FC } from "react";
import { memo } from "react";

type Props = {
  opened: boolean;
  onToggle: () => void;
};

export const Header: FC<Props> = memo(({ opened, onToggle: handleToggle }) => {
  const theme = useMantineTheme();

  return (
    <MantineHeader height={70} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <Burger opened={opened} onClick={handleToggle} size="sm" color={theme.colors.gray[6]} mr="xl" />

        <Text>Application header</Text>
      </div>
    </MantineHeader>
  );
});
