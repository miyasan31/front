import type { BadgeStylesNames, BadgeVariant, DefaultProps, MantineSize } from "@mantine/core";
import { Badge as MantineBadge } from "@mantine/core";
import type { FC } from "react";

import { Link } from "~/components/lib/Link";

const classNames: DefaultProps<BadgeStylesNames>["classNames"] = {
  inner: "normal-case font-medium",
};

type BadgeProps = {
  type?: "div";
  to?: never;
};

type LinkProps = {
  type?: "link";
  to: string;
};

type CommonProps = {
  size?: MantineSize;
  variant?: BadgeVariant;
  label?: string;
  color?: "red" | "green" | "blue" | "yellow" | "orange" | "purple";
};

type Props = CommonProps & (BadgeProps | LinkProps);

export const Badge: FC<Props> = ({ type = "div", size = "md", variant = "outline", color, to, label }) => {
  if (type === "div") {
    return (
      <MantineBadge size={size} variant={variant} color={color} classNames={classNames}>
        {label}
      </MantineBadge>
    );
  }

  return (
    <MantineBadge<typeof Link>
      component={Link}
      to={to ?? ""}
      size={size}
      variant={variant}
      color={color}
      classNames={{
        ...classNames,
        root: "hover:cursor-pointer hover:bg-gray-50",
      }}
    >
      {label}
    </MantineBadge>
  );
};
