import React, { useContext } from "react";
import SideBar from "./components/sidebar";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import LoadingContext from "./context/loading";
export default function Layout({ children }: any) {
  // Context
  const { loading, setLoading } = useContext(LoadingContext);
  const router = useRouter();
  return (
    <>
      {loading && (
        <div className="site-loader">
          <div className="loader-card">
            <CircularProgress />
            Loading...
          </div>
        </div>
      )}

      <div className="sidebar-wrapper">
        {router.pathname != "/login" && <SideBar />}
        <main className={router.pathname != "/login" ? "" : "login-page-main"}>
          {children}
        </main>
      </div>
    </>
  );
}
