import { Callback } from "~/components/page/public/callback/Callback.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const CallbackPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Callback />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CallbackPage;
