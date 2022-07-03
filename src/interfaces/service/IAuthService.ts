export interface IAuthService {
  useAuth: () => void;
  googleSignIn: () => void;
  useSignOut: () => {
    handleSignOut: () => Promise<void>;
  };
}
