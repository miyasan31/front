import { Navigate } from "react-router-dom";

import { Head } from "~/components/lib/Head";
import { storeService } from "~/services/store/storeService";

const { useSessionSelector } = storeService;

export const Callback = () => {
  const session = useSessionSelector();

  if (!session.id) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
      <Head title="callback page" description="callback page" />
      <Navigate to="/" />
    </>
  );
};
