import { Button } from "@mantine/core";

import { Head } from "~/components/lib/Head";
import { authService } from "~/services/auth/authService";

const { googleSignIn: handleGoogleSignIn } = authService;

export const SignIn = () => {
  return (
    <>
      <Head title="sign in page" description="sign in page" />
      <div>sign in</div>
      <Button onClick={handleGoogleSignIn}>Googleでサインイン</Button>
    </>
  );
};
