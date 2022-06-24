import type { ITimeline, ITimelineService } from "~/interfaces/service/ITimelineService";

export const timelineService: ITimelineService = {
  useGet: (): ITimeline[] | undefined => {
    console.info("useGet timeline");
    return undefined;
  },
};
