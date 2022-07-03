import type { ITask } from "~/interfaces/model/ITask";
import type { ISession } from "~/interfaces/store/ISession";

export type SetterOptionFnc<T> = (value: T) => T;

export type SetterFnc<T> = (setter: T | SetterOptionFnc<T>) => void;

export interface IStoreService {
  useSessionSelector: () => ISession;
  useSessionSetter: () => SetterFnc<ISession>;

  useLoadingSelector: () => boolean;
  useLoadingSetter: () => SetterFnc<boolean>;

  useMyTaskListSelector: () => ITask[];
  useMyTaskListSetter: () => SetterFnc<ITask[]>;
}
