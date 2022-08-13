import { createContext } from "react";

const RefreshAPiContext = createContext({
  refreshData: "",
  setRefreshData: (loading: any) => {},
});

export default RefreshAPiContext;
