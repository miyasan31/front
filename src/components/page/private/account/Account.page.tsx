import { Button, Image, Text } from "@mantine/core";

import { Head } from "~/components/lib/Head";
import { authService } from "~/services/auth/authService";
import { storeService } from "~/services/store/storeService";
import { userService } from "~/services/user/userService";

const { useGetUser } = userService;
const { useSignOut } = authService;
const { useSessionSelector } = storeService;

export const Account = () => {
  const session = useSessionSelector();
  const { data } = useGetUser(session?.id ?? "");
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
