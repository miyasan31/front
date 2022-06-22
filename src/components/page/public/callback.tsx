import { Head } from "~/components/shared/Head";
import { authService } from "~/services/auth/authService";

const useAuth = authService.useAuth;

const CallbackInPage = () => {
  useAuth();

  return (
    <>
      <Head title="callback in page" description="callback in page" />

      <div>callback in</div>
    </>
  );
};

export default CallbackInPage;
