import { Avatar, createStyles, Group, MediaQuery, Navbar, Tooltip, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { FC } from "react";
import { BrandNotion, Home, Messages, MoonStars, Search, Settings, Sun } from "tabler-icons-react";

import { Link } from "~/components/lib/Link";
import { NavLink } from "~/components/lib/NavLink";
import { useColorScheme } from "~/libs/mantine/hooks/useColorScheme";

const navigationTop = [
  {
    id: "home",
    path: "/",
    label: "Home",
    Icon: Home,
  },
  {
    id: "about",
    path: "/about",
    label: "About",
    Icon: Messages,
  },
  {
    id: "nest-one",
    path: "/nest-one",
    label: "Nest One",
    Icon: Search,
  },
];

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params, getRef) => {
  const icon: string = getRef("icon");

  return {
    navbar: {
      position: "sticky",
      top: 0,
      width: params?.collapsed ? 81 : 264,
      transition: params?.collapsed ? "width 0.1s linear" : "none",
    },

    header: {
      paddingBottom: theme.spacing.xs,
      marginBottom: theme.spacing.md,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },

    footer: {
      paddingTop: theme.spacing.xs,
      marginTop: theme.spacing.md,
    },

    logo: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 700,
    },

    link: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black,
        },
      },
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][7],
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6],
    },

    linkLabel: params?.collapsed ? { display: "none" } : {},

    avatar: {
      marginTop: theme.spacing.sm,
      marginLeft: 5,
    },
  };
});

export const SideNav: FC<{ initialCollapse: boolean; className?: string }> = ({ initialCollapse, className }) => {
  const [collapsed, _handlers] = useDisclosure(initialCollapse);
  const { classes, cx } = useStyles({ collapsed });
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const handleToggleColorScheme = () => {
    toggleColorScheme();
  };

  return (
    <Navbar p="md" className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link to="/" className={classes.logo}>
            <BrandNotion />
            <span className={classes.linkLabel}>Admin Dashboard</span>
          </Link>
        </Group>

        {navigationTop.map(({ id, path, label, Icon }) => (
          <Tooltip key={id} label={label} position="right" withArrow sx={{ width: "100%" }}>
            <NavLink
              to={path}
              className={({ isActive }) => {
                return cx(classes.link, isActive ? classes.linkActive : null);
              }}
            >
              <Icon className={classes.linkIcon} />
              <span className={classes.linkLabel}>{label}</span>
            </NavLink>
          </Tooltip>
        ))}
      </Navbar.Section>

      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Navbar.Section className={classes.footer}>
          <Tooltip label="設定" position="right" withArrow sx={{ width: "100%" }}>
            <NavLink
              to="/settings"
              className={({ isActive }) => {
                return cx(classes.link, isActive ? classes.linkActive : null);
              }}
            >
              <Settings className={classes.linkIcon} />
            </NavLink>
          </Tooltip>

          <UnstyledButton className={classes.link} onClick={handleToggleColorScheme}>
            {colorScheme === "dark" ? <MoonStars className={classes.linkIcon} /> : <Sun className={classes.linkIcon} />}
          </UnstyledButton>

          <UnstyledButton className={classes.avatar}>
            <Avatar
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              size="md"
            />
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  );
};
