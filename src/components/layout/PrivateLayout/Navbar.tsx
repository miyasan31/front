import { Navbar as MantineNavbar } from "@mantine/core";
import type { FC } from "react";
import { memo } from "react";

import { NavLink } from "~/components/lib/NavLink";

const activeStyle = {
  textDecoration: "underline",
};

const navigationPaths = [
  {
    id: "home",
    path: "/",
    label: "Home",
  },
  {
    id: "about",
    path: "/about",
    label: "About",
  },
  {
    id: "nest-one",
    path: "/nest-one",
    label: "Nest One",
  },
  {
    id: "posts",
    path: "/posts",
    label: "Post List",
  },
  {
    id: "nest-posts",
    path: "/nest-posts",
    label: "Nest Post List",
  },
  {
    id: "not-found",
    path: "/not-found",
    label: "Not Found",
  },
];

type Props = {
  opened: boolean;
};

export const Navbar: FC<Props> = memo(({ opened }) => {
  return (
    <MantineNavbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      {navigationPaths.map((path) => (
        <NavLink key={path.id} to={path.path} style={({ isActive }) => (isActive ? activeStyle : {})}>
          {path.label}
        </NavLink>
      ))}
    </MantineNavbar>
  );
});
