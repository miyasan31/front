export interface ISignInStatus {
  isSignIn: boolean;
}

export interface IAuthService {
  useAuth: () => ISignInStatus;
}
