import { Group } from "@mantine/core";

import { Badge } from "~/components/shared/Badge";
import { storeService } from "~/services/store/storeService";

import { dummyData } from "./dummyData";

const { useSessionSelector } = storeService;

const LabelList = () => {
  const session = useSessionSelector();

  return (
    <Group spacing="xs">
      {dummyData.map((label) => (
        <Badge
          key={label.id}
          type="link"
          to={`/${session?.id}/label/${label.id}/task`}
          size="lg"
          label={label.name}
          color={label.color}
        ></Badge>
      ))}
    </Group>
  );
};

export default LabelList;
