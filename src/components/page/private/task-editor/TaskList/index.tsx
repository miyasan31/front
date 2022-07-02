import { useRecoilValue } from "recoil";

import { session } from "~/libs/recoil/atom/session";
import { userService } from "~/services/user/userService";

const useGetUser = userService.useGet;

const TaskList = () => {
  const sessionInfo = useRecoilValue(session);
  const { data: _ } = useGetUser(sessionInfo.user?.id ?? "");

  return <div>TaskList</div>;
};

export default TaskList;
