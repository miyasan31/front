import { Aside as MantineAside, Text } from "@mantine/core";

export const Aside = () => {
  return (
    <MantineAside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      <Text>Application sidebar</Text>
    </MantineAside>
  );
};
