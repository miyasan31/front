import type { IUser } from "~/interfaces/model/IUser";
import type { IUserService } from "~/interfaces/service/IUserService";

export const userService: IUserService = {
  useGet: (userId: string): IUser | undefined => {
    console.info("useGet user userId:", userId);
    return undefined;
  },
  create: async (user: IUser): Promise<void> => {
    console.info(user);
  },
  update: async (user: IUser): Promise<void> => {
    console.info(user);
  },
};
