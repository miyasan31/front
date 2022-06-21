import { Aside, Text } from "@mantine/core";

export const SideEditor = () => {
  return (
    <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 300, md: 400, lg: 500 }}>
      <Text>Task Editor</Text>
    </Aside>
  );
};
