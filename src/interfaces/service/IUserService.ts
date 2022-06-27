import type { UseQueryResult } from "react-query";

import type { IUser } from "~/interfaces/model/IUser";
import type { GetUserByIdQuery } from "~/libs/graphql/service";

export type IUserService = {
  useGet: (id: IUser["id"]) => UseQueryResult<GetUserByIdQuery, unknown>;
};
