import { Image, Text } from "@mantine/core";
import { useRecoilValue } from "recoil";

import { Head } from "~/components/shared/Head";
import { session } from "~/libs/recoil/atom/session";
import { userService } from "~/services/user/userService";

const useGetUser = userService.useGet;

const HomePage = () => {
  console.info("render home page");
  const sessionInfo = useRecoilValue(session);
  const { data } = useGetUser(sessionInfo?.user?.id ?? "");

  if (!data?.user) return null;

  return (
    <>
      <Head title="home page" description="home page" />

      <div>home</div>
      <Text>{data?.user.id}</Text>
      <Text>{data?.user.name}</Text>
      <Text>{data?.user.profile}</Text>
      <Image src={data?.user.avatar ?? ""} alt={data?.user.name} />
    </>
  );
};

export default HomePage;
