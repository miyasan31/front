import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from "react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
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
  __typename?: "Label";
  color: Scalars["String"];
  createdAt: Scalars["DateTime"];
  id: Scalars["Int"];
  isActive: Scalars["Boolean"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["String"];
};

export type Like = {
  __typename?: "Like";
  createdAt: Scalars["DateTime"];
  id: Scalars["Int"];
  taskId: Scalars["Int"];
  userId: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: User;
};

export type MutationCreateUserArgs = {
  user: CreateUserDto;
};

export type Query = {
  __typename?: "Query";
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
  id: Scalars["Int"];
};

export type QueryLikeArgs = {
  id: Scalars["Int"];
};

export type QueryTaskArgs = {
  id: Scalars["Int"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type Task = {
  __typename?: "Task";
  createdAt: Scalars["DateTime"];
  description: Scalars["String"];
  id: Scalars["Int"];
  isDone: Scalars["Boolean"];
  labelId: Scalars["Float"];
  name: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  userId: Scalars["String"];
};

export type User = {
  __typename?: "User";
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
  __typename?: "Mutation";
  createUser: { __typename?: "User"; id: string; name: string; email: string; avatar?: string | null };
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: Array<{ __typename?: "User"; id: string; name: string; avatar?: string | null } | null>;
};

export const CreateUserDocument = `
    mutation createUser($input: CreateUserDto!) {
  createUser(user: $input) {
    id
    name
    email
    avatar
  }
}
    `;
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>,
) =>
  useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
    ["createUser"],
    (variables?: CreateUserMutationVariables) =>
      fetcher<CreateUserMutation, CreateUserMutationVariables>(
        dataSource.endpoint,
        dataSource.fetchParams || {},
        CreateUserDocument,
        variables,
      )(),
    options,
  );
export const UsersDocument = `
    query users {
  users {
    id
    name
    avatar
  }
}
    `;
export const useUsersQuery = <TData = UsersQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: UsersQueryVariables,
  options?: UseQueryOptions<UsersQuery, TError, TData>,
) =>
  useQuery<UsersQuery, TError, TData>(
    variables === undefined ? ["users"] : ["users", variables],
    fetcher<UsersQuery, UsersQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      UsersDocument,
      variables,
    ),
    options,
  );
