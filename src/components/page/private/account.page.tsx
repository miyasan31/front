import { Button } from "@mantine/core";

import { Head } from "~/components/shared/Head";
import { authService } from "~/services/auth/authService";

const useSignOut = authService.useSignOut;

const AccountPage = () => {
  const { handleSignOut } = useSignOut();
  return (
    <>
      <Head title="account page" description="account page" />

      <div>account</div>

      <Button onClick={handleSignOut}>サインアウト</Button>
    </>
  );
};

export default AccountPage;
