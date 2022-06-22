import type { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export const PublicLayout: FC<LayoutProps> = ({ children }) => {
  return <main className="h-full min-h-screen bg-slate-900 p-4">{children}</main>;
};
