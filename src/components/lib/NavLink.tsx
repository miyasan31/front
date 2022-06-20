import type { FC } from "react";
import type { NavLinkProps } from "react-router-dom";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

export const NavLink: FC<NavLinkProps> = (props) => {
  return <ReactRouterNavLink {...props} />;
};
