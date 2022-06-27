import type { IUserService } from "~/interfaces/service/IUserService";
import { useGetUserByIdQuery } from "~/libs/graphql/service";
import { useGQLClient } from "~/libs/graphql-request/useGQLClient";

export const userService: IUserService = {
  useGet: (userId) => {
    const { createPrivateGQLClient } = useGQLClient();

    const res = useGetUserByIdQuery(
      createPrivateGQLClient(),
      { userId },
      {
        enabled: !!userId,
        onError: (error) => {
          console.info(error);
        },
      },
    );

    return res;
  },
};
