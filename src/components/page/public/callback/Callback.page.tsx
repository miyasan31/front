import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Head } from "~/components/lib/Head";
import { session } from "~/libs/recoil/atom/session";

export const Callback = () => {
  const { user } = useRecoilValue(session);

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
      <Head title="callback page" description="callback page" />
      <Navigate to="/" />
    </>
  );
};
