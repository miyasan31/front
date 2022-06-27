import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit["headers"],
) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
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

export type CreateUserDto = {
  avatar?: InputMaybe<Scalars["String"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  profile: Scalars["String"];
  updatedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type Label = {
  color: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["ID"];
};

export type Like = {
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  taskId: Scalars["ID"];
  userId: Scalars["ID"];
};

export type Mutation = {
  createUser: User;
};

export type MutationCreateUserArgs = {
  user: CreateUserDto;
};

export type Query = {
  label: Label;
  labels: Array<Maybe<Label>>;
  like: Like;
  likes: Array<Maybe<Like>>;
  task: Task;
  tasks: Array<Maybe<Task>>;
  user: User;
  users: Array<Maybe<User>>;
};

export type QueryLabelArgs = {
  id: Scalars["ID"];
};

export type QueryLikeArgs = {
  id: Scalars["ID"];
};

export type QueryTaskArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type Task = {
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["ID"];
  isDone: Scalars["Boolean"];
  labelId: Scalars["ID"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["ID"];
};

export type User = {
  avatar?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  labels: Array<Label>;
  name: Scalars["String"];
  profile: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserDto;
}>;

export type CreateUserMutation = {
  createUser: { id: string; name: string; email: string; profile: string; avatar?: string | null };
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = { users: Array<{ id: string; name: string; profile: string; avatar?: string | null } | null> };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars["ID"];
}>;

export type GetUserByIdQuery = { user: { id: string; name: string; profile: string; avatar?: string | null } };

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
  client: GraphQLClient,
  options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
  headers?: RequestInit["headers"],
) =>
  useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
    ["createUser"],
    (variables?: CreateUserMutationVariables) =>
      fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers)(),
    options,
  );
useCreateUserMutation.getKey = () => ["createUser"];

useCreateUserMutation.fetcher = (
  client: GraphQLClient,
  variables: CreateUserMutationVariables,
  headers?: RequestInit["headers"],
) => fetcher<CreateUserMutation, CreateUserMutationVariables>(client, CreateUserDocument, variables, headers);
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
export const useUsersQuery = <TData = UsersQuery, TError = unknown>(
  client: GraphQLClient,
  variables?: UsersQueryVariables,
  options?: UseQueryOptions<UsersQuery, TError, TData>,
  headers?: RequestInit["headers"],
) =>
  useQuery<UsersQuery, TError, TData>(
    variables === undefined ? ["users"] : ["users", variables],
    fetcher<UsersQuery, UsersQueryVariables>(client, UsersDocument, variables, headers),
    options,
  );
useUsersQuery.document = UsersDocument;

useUsersQuery.getKey = (variables?: UsersQueryVariables) =>
  variables === undefined ? ["users"] : ["users", variables];
useUsersQuery.fetcher = (client: GraphQLClient, variables?: UsersQueryVariables, headers?: RequestInit["headers"]) =>
  fetcher<UsersQuery, UsersQueryVariables>(client, UsersDocument, variables, headers);
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
export const useGetUserByIdQuery = <TData = GetUserByIdQuery, TError = unknown>(
  client: GraphQLClient,
  variables: GetUserByIdQueryVariables,
  options?: UseQueryOptions<GetUserByIdQuery, TError, TData>,
  headers?: RequestInit["headers"],
) =>
  useQuery<GetUserByIdQuery, TError, TData>(
    ["getUserById", variables],
    fetcher<GetUserByIdQuery, GetUserByIdQueryVariables>(client, GetUserByIdDocument, variables, headers),
    options,
  );
useGetUserByIdQuery.document = GetUserByIdDocument;

useGetUserByIdQuery.getKey = (variables: GetUserByIdQueryVariables) => ["getUserById", variables];
useGetUserByIdQuery.fetcher = (
  client: GraphQLClient,
  variables: GetUserByIdQueryVariables,
  headers?: RequestInit["headers"],
) => fetcher<GetUserByIdQuery, GetUserByIdQueryVariables>(client, GetUserByIdDocument, variables, headers);
