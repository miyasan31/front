import { useQuery } from "react-query";

import { apiBaseUrl } from "~/constants/env";
import type { IUser } from "~/interfaces/model/IUser";
import type { IUserService } from "~/interfaces/service/IUserService";

export const userService: IUserService = {
  useGet: (userId: string) => {
    const { data } = useQuery<IUser, Error>(
      ["user", { userId }],
      () => fetch(`${apiBaseUrl}/users/${userId}`).then((res) => res.json()),
      { suspense: true },
    );

    return data;
  },
  create: async (user: IUser) => {
    console.info(user);
  },
  update: async (user: IUser) => {
    console.info(user);
  },
};