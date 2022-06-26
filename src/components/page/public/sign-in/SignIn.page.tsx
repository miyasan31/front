import { Button } from "@mantine/core";

import { Head } from "~/components/shared/Head";
import { authService } from "~/services/auth/authService";

const handleGoogleSignIn = authService.googleSignIn;

export const SignIn = () => {
  return (
    <>
      <Head title="sign in page" description="sign in page" />
      <div>sign in</div>
      <Button onClick={handleGoogleSignIn}>Googleでサインイン</Button>
    </>
  );
};
