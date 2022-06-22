import { Head } from "~/components/shared/Head";
import { timelineService } from "~/services/timeline/timelineService";

const useGetTimeline = timelineService.useGet;

const TimelinePage = () => {
  const data = useGetTimeline();
  console.info(data);

  return (
    <>
      <Head title="timeline page" description="timeline page" />

      <div>timeline</div>
    </>
  );
};

export default TimelinePage;
