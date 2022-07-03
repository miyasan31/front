import type { IUser } from "~/interfaces/model/IUser";

export interface ISession {
  id: IUser["id"] | null;
  name: IUser["name"] | null;
  avatar: IUser["avatar"] | null;
  profile: IUser["profile"] | null;
}
