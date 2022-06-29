import type { FC } from "react";

type Props = {
  message?: string;
};

export const Indicator: FC<Props> = ({ message = "読み込み中..." }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 pt-10">
      <div className="border-primary h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"></div>
      <p>{message}</p>
    </div>
  );
};
