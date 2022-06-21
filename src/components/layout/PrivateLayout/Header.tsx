import { ActionIcon, Autocomplete, Box, Group, Indicator } from "@mantine/core";
import type { FC, ReactNode } from "react";
import { Bell, Search } from "tabler-icons-react";

import { Link } from "~/components/lib/Link";

export const Header: FC<{ left: ReactNode }> = ({ left }) => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
        backgroundColor: theme.white,
      })}
    >
      <Group spacing="lg" noWrap>
        {left}
        <SearchForm />
        <Notification />
      </Group>
    </Box>
  );
};

const SearchForm: FC = () => {
  return (
    <Autocomplete
      data={[]}
      size="lg"
      placeholder="Search"
      icon={<Search size={18} />}
      styles={{
        root: { flexGrow: 1 },
        input: { border: 0, backgroundColor: "transparent" },
      }}
    />
  );
};

const Notification: FC = () => {
  return (
    <Indicator inline size={14} offset={4} color="red" withBorder>
      <ActionIcon component={Link} to="/" variant="hover" radius="xl" size={40}>
        <Bell />
      </ActionIcon>
    </Indicator>
  );
};
