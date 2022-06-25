import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://asia-northeast1-taskhub-backend.cloudfunctions.net/api/graphql", {
      method: "POST",
      ...{ headers: { credentials: "include", "content-type": "application/json" } },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type GQLCreateUserDto = {
  avatar?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  profile: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type GQLLabel = {
  color: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["Int"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["String"];
};

export type GQLLike = {
  createdAt: Scalars["DateTime"];
  id: Scalars["Int"];
  taskId: Scalars["Int"];
  userId: Scalars["ID"];
};

export type GQLMutation = {
  createUser: GQLUser;
};

export type GQLMutationCreateUserArgs = {
  user: GQLCreateUserDto;
};

export type GQLQuery = {
  label: GQLLabel;
  labels: Array<Maybe<GQLLabel>>;
  like: GQLLike;
  likes: Array<Maybe<GQLLike>>;
  task: GQLTask;
  tasks: Array<Maybe<GQLTask>>;
  user: GQLUser;
  users: Array<Maybe<GQLUser>>;
};

export type GQLQueryLabelArgs = {
  id: Scalars["Int"];
};

export type GQLQueryLikeArgs = {
  id: Scalars["Int"];
};

export type GQLQueryTaskArgs = {
  id: Scalars["Int"];
};

export type GQLQueryUserArgs = {
  id: Scalars["ID"];
};

export type GQLTask = {
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["Int"];
  isDone: Scalars["Boolean"];
  labelId: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["String"];
};

export type GQLUser = {
  avatar?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  labels: Array<GQLLabel>;
  name: Scalars["String"];
  profile: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type GQLCreateUserMutationVariables = Exact<{
  input: GQLCreateUserDto;
}>;

export type GQLCreateUserMutation = {
  createUser: { id: string; name: string; email: string; profile: string; avatar?: string | null };
};

export type GQLUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GQLUsersQuery = {
  users: Array<{ id: string; name: string; profile: string; avatar?: string | null } | null>;
};

export type GQLGetUserByIdQueryVariables = Exact<{
  userId: Scalars["ID"];
}>;

export type GQLGetUserByIdQuery = { user: { id: string; name: string; profile: string; avatar?: string | null } };

export const CreateUserDocument = `
    mutation createUser($input: CreateUserDto!) {
  createUser(user: $input) {
    id
    name
    email
    profile
    avatar
  }
}
    `;
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<GQLCreateUserMutation, TError, GQLCreateUserMutationVariables, TContext>,
) =>
  useMutation<GQLCreateUserMutation, TError, GQLCreateUserMutationVariables, TContext>(
    ["createUser"],
    (variables?: GQLCreateUserMutationVariables) =>
      fetcher<GQLCreateUserMutation, GQLCreateUserMutationVariables>(CreateUserDocument, variables)(),
    options,
  );
useCreateUserMutation.getKey = () => ["createUser"];

useCreateUserMutation.fetcher = (variables: GQLCreateUserMutationVariables) =>
  fetcher<GQLCreateUserMutation, GQLCreateUserMutationVariables>(CreateUserDocument, variables);
export const UsersDocument = `
    query users {
  users {
    id
    name
    profile
    avatar
  }
}
    `;
export const useUsersQuery = <TData = GQLUsersQuery, TError = unknown>(
  variables?: GQLUsersQueryVariables,
  options?: UseQueryOptions<GQLUsersQuery, TError, TData>,
) =>
  useQuery<GQLUsersQuery, TError, TData>(
    variables === undefined ? ["users"] : ["users", variables],
    fetcher<GQLUsersQuery, GQLUsersQueryVariables>(UsersDocument, variables),
    options,
  );
useUsersQuery.document = UsersDocument;

useUsersQuery.getKey = (variables?: GQLUsersQueryVariables) =>
  variables === undefined ? ["users"] : ["users", variables];
useUsersQuery.fetcher = (variables?: GQLUsersQueryVariables) =>
  fetcher<GQLUsersQuery, GQLUsersQueryVariables>(UsersDocument, variables);
export const GetUserByIdDocument = `
    query getUserById($userId: ID!) {
  user(id: $userId) {
    id
    name
    profile
    avatar
  }
}
    `;
export const useGetUserByIdQuery = <TData = GQLGetUserByIdQuery, TError = unknown>(
  variables: GQLGetUserByIdQueryVariables,
  options?: UseQueryOptions<GQLGetUserByIdQuery, TError, TData>,
) =>
  useQuery<GQLGetUserByIdQuery, TError, TData>(
    ["getUserById", variables],
    fetcher<GQLGetUserByIdQuery, GQLGetUserByIdQueryVariables>(GetUserByIdDocument, variables),
    options,
  );
useGetUserByIdQuery.document = GetUserByIdDocument;

useGetUserByIdQuery.getKey = (variables: GQLGetUserByIdQueryVariables) => ["getUserById", variables];
useGetUserByIdQuery.fetcher = (variables: GQLGetUserByIdQueryVariables) =>
  fetcher<GQLGetUserByIdQuery, GQLGetUserByIdQueryVariables>(GetUserByIdDocument, variables);
