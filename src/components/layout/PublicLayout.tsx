import type { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const PublicLayout: FC<LayoutProps> = ({ children }) => {
  return <main className="h-full min-h-screen p-4">{children}</main>;
};
