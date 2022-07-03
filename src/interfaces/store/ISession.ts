import type { IUser } from "~/interfaces/model/IUser";

export interface ISession {
  user: Pick<IUser, "id" | "name" | "avatar" | "profile"> | null;
}
