import type { ILoading } from "~/interfaces/store/ILoading";
import type { ISession } from "~/interfaces/store/ISession";

export type SetterOptionFnc<T> = (value: T) => T;

export type SetterFnc<T> = (value: T, setterOption?: SetterOptionFnc<T>) => void;

export interface IStoreService {
  useSessionSelector: () => ISession;
  useSessionSetter: () => SetterFnc<ISession>;

  useLoadingSelector: () => ILoading;
  useLoadingSetter: () => SetterFnc<ILoading>;
}
