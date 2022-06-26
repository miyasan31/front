import { SignIn } from "~/components/page/public/sign-in/SignIn.page";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

const SignInPage = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <SignIn />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SignInPage;
