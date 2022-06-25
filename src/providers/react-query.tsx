import type { FC, ReactNode } from "react";
import type { QueryOptions } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { apiBaseUrl } from "~/constants/env";

type Props = {
  children: ReactNode;
};

const defaultQueryFn: QueryOptions["queryFn"] = async ({ queryKey }) => {
  const { data } = await fetch(`${apiBaseUrl}/${queryKey[0]}`).then((res) => res.json());
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      queryFn: defaultQueryFn,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
  },
});

export const ReactQueryProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};
