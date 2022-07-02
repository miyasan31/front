import type { DefaultMantineColor } from "@mantine/core";
import { Avatar, Box, Card, Group, Spoiler, Stack, Text } from "@mantine/core";
import type { FC } from "react";
import { MessageCircle2 } from "tabler-icons-react";

import { Link } from "~/components/lib/Link";
import { Badge } from "~/components/shared/Badge";
import { LikeButton } from "~/components/shared/LikeButton";

type Props = {
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  task: {
    title: string;
    outputMemo: string;
    like: {
      id: string;
    } | null;
    count: {
      likeCount: number;
      commentCount: number;
    };
  };
  label: {
    id: string;
    name: string;
    color: DefaultMantineColor;
  }[];
};

export const TaskCard: FC<Props> = ({ user, task, label }) => {
  return (
    <Card shadow="xs" p="lg">
      <Stack spacing="xs">
        <Group>
          <Link to={`/${user.id}`}>
            <Avatar
              radius="md"
              size="md"
              src={user.avatar}
              alt={user.name}
              className="hover:ring-m_blue-100  ring-offset-1 hover:ring-2"
            />
          </Link>
          <Box>
            <Link to={`/${user.id}`}>
              <Text size="md" className="hover:underline">
                {user.name}
              </Text>
            </Link>
            <Text size="xs" color="gray">
              2022年6月30日
            </Text>
          </Box>
        </Group>

        <Text size="xl" weight="bold">
          {task.title}
        </Text>

        <Spoiler maxHeight={100} showLabel="もっと見る" hideLabel="少なく表示">
          <Text size="md">{task.outputMemo}</Text>
        </Spoiler>

        <Box
          sx={() => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "sm",
          })}
        >
          <Group spacing="xs">
            {label.map((l) => (
              <Badge
                key={l.id}
                type="link"
                to={`/${user.id}/label/${l.id}/task`}
                size="lg"
                label={l.name}
                color={l.color}
              />
            ))}
          </Group>

          <Group>
            <Group spacing="xs">
              <MessageCircle2 />
              <Text>{task.count.likeCount}</Text>
            </Group>

            <Group spacing="xs">
              <LikeButton like={task.like} />
              <Text>{task.count.commentCount}</Text>
            </Group>
          </Group>
        </Box>
      </Stack>
    </Card>
  );
};
