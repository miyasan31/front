import type { IUserService } from "~/interfaces/service/IUserService";
import { useCreateUserMutation, useGetUserByIdQuery } from "~/libs/graphql/service";

export const userService: IUserService = {
  useGet: (userId) => {
    console.info("user useGet");
    const data = useGetUserByIdQuery({ userId }, { suspense: true });

    return data;
  },
  create: useCreateUserMutation,
};
