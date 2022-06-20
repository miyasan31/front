import { useState } from "react";

export const useAuth = () => {
  const [isSignIn, _setIsSignIn] = useState<boolean>(true);

  return {
    isSignIn,
  };
};
