import { createContext } from "react";

const LoadingContext = createContext({
  loading: false,
  setLoading: (loading: any) => {},
});

export default LoadingContext;
