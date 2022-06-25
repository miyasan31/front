import { Head } from "~/components/shared/Head";
import { timelineService } from "~/services/timeline/timelineService";

const useGetTimeline = timelineService.useGet;

const TimelinePage = () => {
  const _data = useGetTimeline();

  return (
    <>
      <Head title="timeline page" description="timeline page" />

      <div>timeline</div>
    </>
  );
};

export default TimelinePage;
