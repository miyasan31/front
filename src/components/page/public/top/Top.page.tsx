import { Button } from "@mantine/core";

import { Head } from "~/components/lib/Head";
import { Link } from "~/components/lib/Link";

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
