import { Account } from "~/components/page/private/account/Account.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const AccountPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Account />
      </Suspense>
    </ErrorBoundary>
  );
};

export default AccountPage;
