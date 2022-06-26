import type { GQLTask } from "~/libs/graphql/service";

export interface ITask extends GQLTask {}

// import type { ILabel } from "~/interfaces/model/ILabel";
// import type { IUser } from "~/interfaces/model/IUser";

// export interface ITask {
//   id: string;
//   taskName: string;
//   description: string;
//   outputMemo: string;
//   isDone: boolean;
//   likeCount: number;
//   userId: IUser["id"];
//   labelId: ILabel["id"];
//   createdAt?: Date;
//   updatedAt?: Date;
// }
