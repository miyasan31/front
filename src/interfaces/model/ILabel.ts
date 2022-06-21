import type { IUser } from "~/interfaces/model/IUser";

export interface ILabel {
  id: string;
  tagName: string;
  color: string;
  isActive: boolean;
  userId: IUser["id"];
  createdAt?: Date;
}
