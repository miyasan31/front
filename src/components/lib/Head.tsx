import type { FC, ReactNode } from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export const Head: FC<HeadProps> = ({ title, description, children }) => {
  return (
    <Helmet title={title} defaultTitle="React-Vite-TailwindCSS-Starter">
      <meta name="description" content={description} />
      {children}
    </Helmet>
  );
};
