import { GraphQLClient } from "graphql-request";

import { apiBaseUrl } from "~/constants/env";

const buildHeaders = (idToken?: string) => {
  if (!idToken) return {};
  return { headers: { Authorization: `Bearer ${idToken}` } };
};

export const useGQLClient = (): {
  createPublicGQLClient: () => GraphQLClient;
  createPrivateGQLClient: () => GraphQLClient;
} => {
  // トークンを取得する
  const idToken = "";

  const createPublicGQLClient = () => {
    return new GraphQLClient(apiBaseUrl);
  };

  const createPrivateGQLClient = () => {
    return new GraphQLClient(apiBaseUrl, {
      ...buildHeaders(idToken),
    });
  };

  return {
    createPublicGQLClient,
    createPrivateGQLClient,
  };
};
