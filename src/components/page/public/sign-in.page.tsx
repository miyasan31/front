import { Button } from "@mantine/core";

import { Head } from "~/components/shared/Head";
import { authService } from "~/services/auth/authService";

const handleGoogleSignIn = authService.googleSignIn;

const SignInPage = () => {
  return (
    <>
      <Head title="sign in page" description="sign in page" />
      <div>sign in</div>
      <Button onClick={handleGoogleSignIn}>Googleでサインイン</Button>
    </>
  );
};

export default SignInPage;
