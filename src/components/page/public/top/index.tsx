import { Top } from "~/components/page/public/top/Top.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const TopPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Top />
      </Suspense>
    </ErrorBoundary>
  );
};

export default TopPage;
