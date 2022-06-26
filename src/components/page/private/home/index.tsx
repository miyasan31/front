import { Home } from "~/components/page/private/home/Home.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const HomePage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Home />
      </Suspense>
    </ErrorBoundary>
  );
};

export default HomePage;
