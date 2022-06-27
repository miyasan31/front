import type { FC, ReactNode } from "react";

import { ErrorBoundaryProvider } from "~/providers/error-boundary";
import { MantineProvider } from "~/providers/mantine";
import { ReactHelmetProvider } from "~/providers/react-helmet";
import { ReactQueryProvider } from "~/providers/react-query";
import { ReactRouterProvider } from "~/providers/react-router";
import { RecoilProvider } from "~/providers/recoil";
import { AuthProvider } from "~/routes";

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <MantineProvider>
      <ReactHelmetProvider>
        <ReactQueryProvider>
          <RecoilProvider>
            <AuthProvider>
              <ErrorBoundaryProvider>
                <ReactRouterProvider>
                  <>{children}</>
                </ReactRouterProvider>
              </ErrorBoundaryProvider>
            </AuthProvider>
          </RecoilProvider>
        </ReactQueryProvider>
      </ReactHelmetProvider>
    </MantineProvider>
  );
};
