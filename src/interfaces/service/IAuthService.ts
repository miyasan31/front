import type { ApiError, Provider, Session, User } from "@supabase/supabase-js";

import type { IUser } from "~/interfaces/model/IUser";

export interface ISession {
  isLoading: boolean;
  user: Pick<IUser, "id" | "name" | "avatar" | "profile"> | null;
}

export interface IGoogleSignInResponse {
  session: Session | null;
  user: User | null;
  provider?: Provider;
  url?: string | null;
  error: ApiError | null;
}

export interface IUseSignOut {
  handleSignOut: () => Promise<void>;
}

export interface IAuthService {
  useAuth: () => void;
  googleSignIn: () => Promise<IGoogleSignInResponse>;
  useSignOut: () => IUseSignOut;
}
