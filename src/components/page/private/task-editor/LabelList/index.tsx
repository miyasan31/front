import { Group } from "@mantine/core";
import { useRecoilValue } from "recoil";

import { Badge } from "~/components/shared/Badge";
import { session } from "~/libs/recoil/atom/session";

import { dummyData } from "./dummyData";

const LabelList = () => {
  const sessionInfo = useRecoilValue(session);

  return (
    <Group spacing="xs">
      {dummyData.map((label) => (
        <Badge
          key={label.id}
          type="link"
          to={`/${sessionInfo?.id}/label/${label.id}/task`}
          size="lg"
          label={label.name}
          color={label.color}
        ></Badge>
      ))}
    </Group>
  );
};

export default LabelList;
