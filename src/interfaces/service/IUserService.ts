import type { IUser } from "~/interfaces/model/IUser";

export type IUserService = {
  useGet: (id: string) => IUser | undefined;
  create: (user: IUser) => Promise<void>;
  update: (user: IUser) => Promise<void>;
};
