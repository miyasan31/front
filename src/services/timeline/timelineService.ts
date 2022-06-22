import { useQuery } from "react-query";

import { apiBaseUrl } from "~/constants/env";
import type { ITimeline, ITimelineService } from "~/interfaces/service/ITimelineService";

export const timelineService: ITimelineService = {
  useGet: () => {
    const { data } = useQuery<ITimeline[], Error>(
      ["timeline"],
      () => fetch(`${apiBaseUrl}/timeline`).then((res) => res.json()),
      { suspense: true },
    );

    return data;
  },
};
