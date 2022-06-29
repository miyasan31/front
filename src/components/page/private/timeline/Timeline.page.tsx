import { Head } from "~/components/lib/Head";
import { timelineService } from "~/services/timeline/timelineService";

const useGetTimeline = timelineService.useGet;

export const Timeline = () => {
  const _data = useGetTimeline();

  return (
    <>
      <Head title="timeline page" description="timeline page" />

      <div>timeline</div>
    </>
  );
};
