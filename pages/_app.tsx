import "../styles/globals.css";
import Layout from "../src/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import JwtContext from "../src/context/authContext";
import LoadingContext from "../src/context/loading";
import RefreshAPiContext from "../src/context/refreshApi";

function MyApp({ Component, pageProps }: any) {
  // States
  const [authenticated, setAuthenticated] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshData, setRefreshData] = useState<any>();

  // Variables

  const router = useRouter();

  // Effects
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      if (router.pathname == "/login") {
        router.push("/");
      }
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <JwtContext.Provider value={{ authenticated, setAuthenticated }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <RefreshAPiContext.Provider value={{ refreshData, setRefreshData }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RefreshAPiContext.Provider>
        </LoadingContext.Provider>
      </JwtContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
