import type { GQLUser } from "~/libs/graphql/service";

// export interface IUser {
//   id: string;
//   name: string;
//   email: string;
//   profile: string;
//   avatar: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }

export interface IUser extends GQLUser {}
