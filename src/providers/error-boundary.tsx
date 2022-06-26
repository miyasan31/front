import type { FC, ReactNode } from "react";

import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { AppFallback } from "~/components/provider/ErrorBoundary/Fallback";

type Props = {
  children: ReactNode;
};

export const ErrorBoundaryProvider: FC<Props> = ({ children }) => {
  return <ErrorBoundary FallbackComponent={AppFallback}>{children}</ErrorBoundary>;
};
