import type { FC, ReactNode } from "react";

import { Suspense } from "~/components/provider/Suspense";
import { AuthProvider } from "~/providers/auth-provider";
import { ErrorBoundaryProvider } from "~/providers/error-boundary";
import { MantineProvider } from "~/providers/mantine";
import { ReactHelmetProvider } from "~/providers/react-helmet";
import { ReactQueryProvider } from "~/providers/react-query";
import { ReactRouterProvider } from "~/providers/react-router";
import { RecoilProvider } from "~/providers/recoil";

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundaryProvider>
      <Suspense fallback={<></>}>
        <MantineProvider>
          <ReactHelmetProvider>
            <ReactQueryProvider>
              <RecoilProvider>
                <AuthProvider>
                  <ReactRouterProvider>
                    <>{children}</>
                  </ReactRouterProvider>
                </AuthProvider>
              </RecoilProvider>
            </ReactQueryProvider>
          </ReactHelmetProvider>
        </MantineProvider>
      </Suspense>
    </ErrorBoundaryProvider>
  );
};
