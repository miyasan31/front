import { Button, Image, Text } from "@mantine/core";
import { useRecoilValue } from "recoil";

import { Head } from "~/components/shared/Head";
import { session } from "~/libs/recoil/atom/session";
import { authService } from "~/services/auth/authService";
import { userService } from "~/services/user/userService";

const useGetUser = userService.useGet;
const useSignOut = authService.useSignOut;

export const Account = () => {
  const sessionInfo = useRecoilValue(session);
  const { data } = useGetUser(sessionInfo.user?.id ?? "");
  const { handleSignOut } = useSignOut();

  if (!data?.user) return null;

  return (
    <>
      <Head title="account page" description="account page" />

      <Button onClick={handleSignOut}>サインアウト</Button>

      <Text>{data?.user.id}</Text>
      <Text>{data?.user.name}</Text>
      <Text>{data?.user.profile}</Text>
      <Image src={data?.user.avatar ?? ""} alt={data?.user.name} />
    </>
  );
};
