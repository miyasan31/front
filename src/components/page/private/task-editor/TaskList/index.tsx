import { Checkbox, Text, UnstyledButton } from "@mantine/core";

import type { ITask } from "~/interfaces/model/ITask";
import { storeService } from "~/services/store/storeService";
import { userService } from "~/services/user/userService";

const { useSessionSelector, useMyTaskListSelector, useMyTaskListSetter } = storeService;
const { useGetUser } = userService;

const TaskList = () => {
  const session = useSessionSelector();
  const myTaskList = useMyTaskListSelector();
  const setMyTaskList = useMyTaskListSetter();
  const { data: _ } = useGetUser(!myTaskList.length ? session?.id ?? "" : "");

  const handleCheck = (task: ITask) => {
    setMyTaskList((prev) => prev.map((item) => (item.id === task.id ? { ...item, isDone: !task.isDone } : item)));
  };

  if (!myTaskList.length) return <Text>タスクが登録されていません</Text>;

  return (
    <div className="flex flex-col gap-4">
      {myTaskList.map((task) => (
        <div key={task.id} className="flex items-center gap-4">
          <Checkbox defaultChecked={task.isDone} onClick={() => handleCheck(task)} />
          <UnstyledButton>
            <Text>{task.name}</Text>
          </UnstyledButton>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
