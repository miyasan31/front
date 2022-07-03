import { Checkbox, Text, UnstyledButton } from "@mantine/core";
import { useRecoilState, useSetRecoilState } from "recoil";

import type { ITask } from "~/interfaces/model/ITask";
import { editTaskData, myTaskList, taskEditorTabIndex } from "~/libs/recoil/atom/taskEditor";
import { storeService } from "~/services/store/storeService";
import { userService } from "~/services/user/userService";

const { useSessionSelector } = storeService;
const { useGetUser } = userService;

const TaskList = () => {
  const session = useSessionSelector();
  const setEditTaskInfo = useSetRecoilState(editTaskData);
  const handleSetActiveTabIndex = useSetRecoilState(taskEditorTabIndex);
  const [myTaskListInfo, setIsDoneTaskInfo] = useRecoilState(myTaskList);
  const { data: _ } = useGetUser(myTaskListInfo ? session?.id ?? "" : "");

  const handleCheck = (task: ITask) => {
    setIsDoneTaskInfo((prev) => prev.map((item) => (item.id === task.id ? { ...item, isDone: !task.isDone } : item)));
  };

  const handleEditTask = (task: ITask) => {
    setEditTaskInfo(task);
    handleSetActiveTabIndex(1);
  };

  if (!myTaskListInfo.length) return <Text>タスクが登録されていません</Text>;

  return (
    <div className="flex flex-col gap-4">
      {myTaskListInfo.map((task) => (
        <div key={task.id} className="flex items-center gap-4">
          <Checkbox defaultChecked={task.isDone} onClick={() => handleCheck(task)} />
          <UnstyledButton onClick={() => handleEditTask(task)}>
            <Text>{task.name}</Text>
          </UnstyledButton>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
