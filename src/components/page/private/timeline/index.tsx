import { Timeline } from "~/components/page/private/timeline/Timeline.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const TimelinePage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Timeline />
      </Suspense>
    </ErrorBoundary>
  );
};

export default TimelinePage;
