import { Button } from "@mantine/core";

import { Link } from "~/components/lib/Link";
import { Head } from "~/components/shared/Head";

export const Top = () => {
  return (
    <>
      <Head title="top page" description="top page" />
      <div>top</div>
      <Link to="/sign-in">
        <Button>sign-in</Button>
      </Link>
    </>
  );
};
