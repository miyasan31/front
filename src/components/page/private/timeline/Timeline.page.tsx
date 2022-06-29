import { Stack } from "@mantine/core";

import { Head } from "~/components/lib/Head";
import { TaskCard } from "~/components/shared/TaskCard";

import { dummyData } from "./dummyData";

export const Timeline = () => {
  return (
    <>
      <Head title="timeline page" description="timeline page" />

      <Stack spacing="xs">
        {dummyData.map((data) => (
          <TaskCard key={data.task.id} user={data.user} task={data.task} label={data.label} />
        ))}
      </Stack>
    </>
  );
};
