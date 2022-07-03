import { Checkbox, Text, UnstyledButton } from "@mantine/core";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import type { ITask } from "~/interfaces/model/ITask";
import { session } from "~/libs/recoil/atom/session";
import { editTaskData, myTaskList, taskEditorTabIndex } from "~/libs/recoil/atom/taskEditor";
import { userService } from "~/services/user/userService";

const { useGetUser } = userService;

const TaskList = () => {
  const sessionInfo = useRecoilValue(session);
  const setEditTaskInfo = useSetRecoilState(editTaskData);
  const handleSetActiveTabIndex = useSetRecoilState(taskEditorTabIndex);
  const [myTaskListInfo, setIsDoneTaskInfo] = useRecoilState(myTaskList);
  const { data: _ } = useGetUser(myTaskListInfo ? sessionInfo.user?.id ?? "" : "");

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
