import type { UseQueryResult } from "react-query";

import type { IUser } from "~/interfaces/model/IUser";
import type { GQLGetUserByIdQuery, useCreateUserMutation } from "~/libs/graphql/service";

export type IUserService = {
  useGet: (id: string) => UseQueryResult<GQLGetUserByIdQuery, unknown>;
  get?: (id: string) => Promise<IUser | undefined>;
  create: typeof useCreateUserMutation;
  update?: (user: IUser) => Promise<void>;
};
