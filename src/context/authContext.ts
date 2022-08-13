import { createContext } from "react";

const JwtContext = createContext({
  authenticated: false,
  setAuthenticated: (jwtData: any) => {},
});

export default JwtContext;
