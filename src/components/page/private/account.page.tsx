import { Head } from "~/components/shared/Head";
import { userService } from "~/services/user/userService";

const useGetUser = userService.useGet;
const createUser = userService.create;

const AccountPage = () => {
  const data = useGetUser("1");
  console.info(data);

  const handleCreateUser = async () => {
    await createUser({
      id: "1",
      userName: "",
      email: "",
      profile: "",
      avatar: "",
    });

    console.info("トースト表示");
  };
  return (
    <>
      <Head title="account page" description="account page" />

      <div>account</div>

      <button onClick={handleCreateUser}>ユーザー作成する！</button>
    </>
  );
};

export default AccountPage;
