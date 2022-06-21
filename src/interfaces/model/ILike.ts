import type { ITask } from "~/interfaces/model/ITask";
import type { IUser } from "~/interfaces/model/IUser";

export interface ILike {
  id: string;
  userId: IUser["id"];
  taskId: ITask["id"];
  createdAt?: Date;
}
