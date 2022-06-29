import { ActionIcon } from "@mantine/core";
import type { FC } from "react";
import React from "react";
import { Heart } from "tabler-icons-react";

type Props = {
  like: {
    id: string;
  } | null;
};

export const LikeButton: FC<Props> = ({ like }) => {
  const handleLike = () => {
    if (!like) {
      console.info("push like!!");
      return;
    }
    console.info("remove like!!");
  };

  return (
    <ActionIcon size="lg" radius="xl" onClick={handleLike}>
      <Heart color={like ? "red" : "gray"} />
    </ActionIcon>
  );
};
