import { Button } from "@mantine/core";

import { Head } from "~/components/shared/Head";
import { authService } from "~/services/auth/authService";
import { userService } from "~/services/user/userService";

const useGetUser = userService.useGet;
const createUser = userService.create;
const useSignOut = authService.useSignOut;

const AccountPage = () => {
  const { handleSignOut } = useSignOut();
  const data = useGetUser("1");
  console.info(data);

  const handleCreateUser = async () => {
    await createUser({
      id: "1",
      userName: "名前",
      email: "メール",
      profile: "プロフィール",
      avatar: "アバター",
    });
    console.info("トースト表示");
  };
  return (
    <>
      <Head title="account page" description="account page" />

      <div>account</div>

      <Button onClick={handleCreateUser}>ユーザー作成する！</Button>

      <Button onClick={handleSignOut}>サインアウト</Button>
    </>
  );
};

export default AccountPage;
