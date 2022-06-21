import { createStyles, Group, MediaQuery, Navbar, Tooltip, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { FC } from "react";
import { ArrowLeft, ArrowRight, DeviceAnalytics, Home } from "tabler-icons-react";

import { Link } from "~/components/lib/Link";
import { NavLink } from "~/components/lib/NavLink";

const navigationPaths = [
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
    Icon: Home,
  },
  {
    id: "nest-one",
    path: "/nest-one",
    label: "Nest One",
    Icon: Home,
  },
  {
    id: "posts",
    path: "/posts",
    label: "Post List",
    Icon: Home,
  },
  {
    id: "nest-posts",
    path: "/nest-posts",
    label: "Nest Post List",
    Icon: Home,
  },
  {
    id: "not-found",
    path: "/not-found",
    label: "Not Found",
    Icon: Home,
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
      borderTop: `1px solid ${theme.colors.gray[2]}`,
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
  };
});

export const SideNav: FC<{ className?: string }> = ({ className }) => {
  const [collapsed, handlers] = useDisclosure(false);
  const { classes, cx } = useStyles({ collapsed });

  return (
    <Navbar p="md" className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link to="/" className={classes.logo}>
            <DeviceAnalytics />
            <span className={classes.linkLabel}>Admin Dashboard</span>
          </Link>
        </Group>

        {navigationPaths.map(({ id, path, label, Icon }) => (
          <Tooltip key={id} label={label} disabled={!collapsed} position="right" withArrow sx={{ width: "100%" }}>
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
          {/* eslint-disable-next-line react/jsx-handler-names */}
          <UnstyledButton className={classes.link} onClick={handlers.toggle}>
            {collapsed ? (
              <ArrowRight className={classes.linkIcon} />
            ) : (
              <>
                <ArrowLeft className={classes.linkIcon} />
                <span>折りたたむ</span>
              </>
            )}
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  );
};
