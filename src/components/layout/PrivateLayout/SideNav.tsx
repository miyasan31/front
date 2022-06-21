import { Avatar, createStyles, Group, Navbar, Tooltip, UnstyledButton } from "@mantine/core";
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
    label: "ホーム",
    Icon: Home,
  },
  {
    id: "timeline",
    path: "/timeline",
    label: "タイムライン",
    Icon: Messages,
  },
  {
    id: "search",
    path: "/search",
    label: "検索する",
    Icon: Search,
  },
];

const useStyles = createStyles<string, { collapsed?: boolean; type: "drawer" | "nav" }>((theme, params, getRef) => {
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
      marginBottom: params.type === "drawer" ? theme.spacing.sm : 0,
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
      width: "100%",
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      marginLeft: 5,
    },
  };
});

export const SideNav: FC<{ type: "drawer" | "nav" }> = ({ type }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [collapsed, _handlers] = useDisclosure(type === "nav");
  const { classes, cx } = useStyles({ collapsed, type });

  const handleToggleColorScheme = () => {
    toggleColorScheme();
  };

  return (
    <Navbar p="md" className={cx(classes.navbar)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link to="/" className={classes.logo}>
            <BrandNotion />
            <span className={classes.linkLabel}>TaskHub</span>
          </Link>
        </Group>

        {navigationTop.map(({ id, path, label, Icon }) => (
          <Tooltip key={id} label={label} position="right" disabled={!collapsed} withArrow sx={{ width: "100%" }}>
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

      <Navbar.Section className={classes.footer}>
        <Tooltip label="設定" position="right" disabled={!collapsed} withArrow sx={{ width: "100%" }}>
          <NavLink
            to="/setting"
            className={({ isActive }) => {
              return cx(classes.link, isActive ? classes.linkActive : null);
            }}
          >
            <Settings className={classes.linkIcon} />
            <span className={classes.linkLabel}>設定</span>
          </NavLink>
        </Tooltip>

        <Tooltip label="テーマ切り替え" position="right" disabled={!collapsed} withArrow sx={{ width: "100%" }}>
          <UnstyledButton className={classes.link} onClick={handleToggleColorScheme}>
            {colorScheme === "dark" ? <MoonStars className={classes.linkIcon} /> : <Sun className={classes.linkIcon} />}
            <span className={classes.linkLabel}>テーマ切り替え</span>
          </UnstyledButton>
        </Tooltip>

        <UnstyledButton>
          <NavLink
            to="/account"
            className={({ isActive }) => {
              return cx(classes.link, isActive ? classes.linkActive : null);
            }}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
              size="sm"
            />
            <span className={classes.linkLabel}>みやさん</span>
          </NavLink>
        </UnstyledButton>
      </Navbar.Section>
    </Navbar>
  );
};
