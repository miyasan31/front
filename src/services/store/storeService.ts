import { useRecoilValue, useSetRecoilState } from "recoil";

import type { ITask } from "~/interfaces/model/ITask";
import type { IStoreService, SetterFnc } from "~/interfaces/service/IStoreService";
import type { ISession } from "~/interfaces/store/ISession";
import { loading } from "~/libs/recoil/atom/loading";
import { session } from "~/libs/recoil/atom/session";
import { myTaskList } from "~/libs/recoil/atom/taskEditor";

const sessionStore = {
  useSessionSelector: () => {
    return useRecoilValue(session);
  },
  useSessionSetter: () => {
    const setValue = useSetRecoilState(session);
    const setSession: SetterFnc<ISession> = (setter) => {
      setValue(setter);
    };
    return setSession;
  },
};

const loadingStore = {
  useLoadingSelector: () => {
    return useRecoilValue(loading);
  },
  useLoadingSetter: () => {
    const setValue = useSetRecoilState(loading);
    const setSession: SetterFnc<boolean> = (setter) => {
      setValue(setter);
    };
    return setSession;
  },
};

const myTaskListStore = {
  useMyTaskListSelector: () => {
    return useRecoilValue(myTaskList);
  },
  useMyTaskListSetter: () => {
    const setValue = useSetRecoilState(myTaskList);
    const setSession: SetterFnc<ITask[]> = (setter) => {
      setValue(setter);
    };
    return setSession;
  },
};

export const storeService: IStoreService = {
  ...sessionStore,
  ...loadingStore,
  ...myTaskListStore,
};
