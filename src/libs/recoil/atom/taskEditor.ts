import { atom } from "recoil";

import type { ITask } from "~/interfaces/model/ITask";

const dummyData = [
  {
    id: "1",
    name: "タスク1",
    description: "タスク1の説明",
    outputMemo: "タスク1の出力",
    likeCount: 10,
    isDone: false,
    userId: "1",
    labelId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "タスク2",
    description: "タスク2の説明",
    outputMemo: "タスク2の出力メモリ",
    likeCount: 0,
    isDone: true,
    userId: "1",
    labelId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const myTaskList = atom<ITask[]>({
  key: "myTaskData",
  default: dummyData,
});

export const editTaskData = atom<ITask | null>({
  key: "editTaskData",
  default: null,
});
