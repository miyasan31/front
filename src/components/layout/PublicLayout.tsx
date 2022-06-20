import { Box, Button, Group, Text } from "@mantine/core";
import type { FC, ReactNode } from "react";

import { Link } from "~/components/lib/Link";
import { errorButton, successButton } from "~/constants/buttonColor";
import { useColorScheme } from "~/libs/mantine/hooks/useColorScheme";
import { useMediaQuery } from "~/libs/mantine/hooks/useMediaQuery";
import { useViewportSize } from "~/libs/mantine/hooks/useViewportSize";

type LayoutProps = {
  children: ReactNode;
};

export const PublicLayout: FC<LayoutProps> = ({ children }) => {
  const { toggleColorScheme } = useColorScheme();
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  const handleClick = () => {
    toggleColorScheme();
  };

  return (
    <main className="h-full min-h-screen bg-slate-900 p-4">
      <div>{`width: ${width}`}</div>
      <div>{`largerThanXs: ${largerThanXs}`}</div>
      <div>{`largerThanSm: ${largerThanSm}`}</div>
      <div>{`largerThanMd: ${largerThanMd}`}</div>
      <div>{`largerThanLg: ${largerThanLg}`}</div>
      <div>{`largerThanXl: ${largerThanXl}`}</div>

      <Text sx={(theme) => ({ lineHeight: theme.other.lineHeights[1] })}>テキスト</Text>
      <Text sx={(theme) => ({ lineHeight: theme.other.lineHeights[4] })}>テキスト</Text>

      <Group spacing={"xs"}>
        <Button onClick={handleClick}>Primary</Button>
        <Button color="blue">Blue</Button>
        <Button color="bright-pink">Custom Color</Button>
      </Group>

      <Group spacing={16}>
        <Button variant="filled">filled</Button>
        <Button variant="light">light</Button>
        <Button variant="outline">outline</Button>
        <Button variant="gradient">gradient</Button>
        <Button variant="subtle">subtle</Button>
        <Button variant="white">white</Button>
        <Button variant="default">default</Button>
      </Group>

      <Box
        component={Link}
        to="/about"
        sx={(theme) => ({
          fontSize: theme.fontSizes.md,
          "@media (max-width: 755px)": {
            fontSize: theme.fontSizes.sm,
          },
        })}
      >
        Styled react-router link
      </Box>

      <div className="flex flex-wrap gap-4 pb-4">
        <Link to="/" className={successButton}>
          to /
        </Link>
        <Link to="/nest-one" className={successButton}>
          to /nest-one
        </Link>
        <Link to="/about" className={successButton}>
          to /about
        </Link>
        <Link to="/posts" className={successButton}>
          to /posts
        </Link>
        <Link to="/nest-posts" className={successButton}>
          to /nest-posts
        </Link>
        <Link to="/not-found" className={errorButton}>
          to /not-found
        </Link>
      </div>
      {children}
    </main>
  );
};
