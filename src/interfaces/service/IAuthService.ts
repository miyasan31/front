export interface IUseSignOut {
  handleSignOut: () => Promise<void>;
}

export interface IAuthService {
  useAuth: () => void;
  googleSignIn: () => void;
  useSignOut: () => IUseSignOut;
}
