import type { IUserService } from "~/interfaces/service/IUserService";
import { useCreateUserMutation, useGetUserByIdQuery } from "~/libs/graphql/service";

export const userService: IUserService = {
  useGet: (userId) => {
    const data = useGetUserByIdQuery({ userId });
    return data;
  },
  create: useCreateUserMutation,
};
