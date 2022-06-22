import { useQuery } from "react-query";

import { Head } from "~/components/shared/Head";
import { apiBaseUrl } from "~/constants/env";
import type { ITimeline } from "~/interfaces/api/ITimeline";

const TimelinePage = () => {
  const { data } = useQuery<ITimeline[], Error>(
    ["timeline"],
    () => fetch(`${apiBaseUrl}/timeline`).then((res) => res.json()),
    { suspense: true },
  );

  console.info(data);

  if (!data) return null;

  return (
    <>
      <Head title="timeline page" description="timeline page" />

      <div>timeline</div>
    </>
  );
};

export default TimelinePage;
