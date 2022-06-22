import type { ApiError, Provider, Session, User } from "@supabase/supabase-js";

export interface ISignInStatus {
  isSignIn: boolean;
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
  useAuth: () => ISignInStatus;
  googleSignIn: () => Promise<IGoogleSignInResponse>;
  useSignOut: () => IUseSignOut;
}
