import { Setting } from "~/components/page/private/setting/setting.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const SettingPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Setting />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SettingPage;
