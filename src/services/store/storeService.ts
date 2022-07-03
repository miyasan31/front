import { useRecoilValue, useSetRecoilState } from "recoil";

import type { IStoreService, SetterFnc } from "~/interfaces/service/IStoreService";
import type { ISession } from "~/interfaces/store/ISession";
import { loading } from "~/libs/recoil/atom/loading";
import { session } from "~/libs/recoil/atom/session";

const sessionStore = {
  useSessionSelector: () => {
    return useRecoilValue(session);
  },
  useSessionSetter: () => {
    const setValue = useSetRecoilState(session);
    const setSession: SetterFnc<ISession> = (user, setterOption) => {
      setValue(setterOption ? setterOption(user) : user);
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
    const setSession: SetterFnc<boolean> = (loading, setterOption) => {
      setValue(setterOption ? setterOption(loading) : loading);
    };
    return setSession;
  },
};

export const storeService: IStoreService = {
  ...sessionStore,
  ...loadingStore,
};
