import type { FC, ReactNode } from "react";

import { ErrorBoundaryProvider } from "~/providers/error-boundary";
import { MantineProvider } from "~/providers/mantine";
import { ReactHelmetProvider } from "~/providers/react-helmet";
import { ReactQueryProvider } from "~/providers/react-query";
import { ReactRouterProvider } from "~/providers/react-router";
import { RecoilProvider } from "~/providers/recoil";
import { SuspenseProvider } from "~/providers/suspense";

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundaryProvider>
      <SuspenseProvider>
        <ReactHelmetProvider>
          <ReactQueryProvider>
            <MantineProvider>
              <RecoilProvider>
                <ReactRouterProvider>
                  <>{children}</>
                </ReactRouterProvider>
              </RecoilProvider>
            </MantineProvider>
          </ReactQueryProvider>
        </ReactHelmetProvider>
      </SuspenseProvider>
    </ErrorBoundaryProvider>
  );
};
