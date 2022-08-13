import React, { useState, useEffect, useContext } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BookingIcon,
  ContentIcon,
  DashboardIcon,
  LogoutIcon,
  UserIcons,
} from "../Icons/AllIcons";
import SidebarListItem, { SidebarLogoItem } from "./sidebarList";
import { useRouter } from "next/router";
import whisWheelLogo from "../../../public/wish-wheel-logo.svg";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import JwtContext from "../../context/authContext";
import LoadingContext from "../../context/loading";

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  [theme.breakpoints.down(800)]: {
    width: "100%!important",
  },
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `84px`,
  [theme.breakpoints.down(800)]: {
    width: "80px",
  },
  [theme.breakpoints.down(576)]: {
    width: "50px",
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  // States
  const [open, setOpen] = React.useState(false);
  const [jwt, setJwt] = useLocalStorage("jwt", null);
  const [authenticationState, setAuthenticationState] = useState<any>();

  // Context
  const { authenticated, setAuthenticated } = useContext(JwtContext);
  const { loading, setLoading } = useContext(LoadingContext);

  // Variables
  const theme = useTheme();
  const router = useRouter();

  // Functions
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const logout = () => {
    setLoading(true);
    setOpen(false);
    setTimeout(() => {
      localStorage.removeItem("jwt");
      setAuthenticated(false);
      setLoading(false);
      setAuthenticationState(authenticated);
    }, 1500);
  };

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

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      if (router.pathname == "/login") {
        router.push("/");
      }
    } else {
      router.push("/login");
    }
  }, [authenticationState]);

  return (
    <Drawer
      variant="permanent"
      className="side-bar"
      open={open}
      sx={{
        [`& .MuiDrawer-paper`]: { background: "#640E27" },
      }}
    >
      <div>
        <SidebarLogoItem
          src={whisWheelLogo.src}
          name="Wish Wheels"
          onClick={handleDrawerToggle}
        />
        <div className="divider"></div>
        <SidebarListItem
          onClick={() => {
            router.push("/");
            setOpen(false);
          }}
          active={router.pathname === "/"}
          svgIcon={<DashboardIcon />}
          label="Dashboard"
        />
        <SidebarListItem
          onClick={() => {
            router.push("/inventory");
            setOpen(false);
          }}
          active={router.pathname === "/inventory"}
          svgIcon={<BookingIcon />}
          label="Inventory"
        />
        <SidebarListItem
          onClick={() => {
            router.push("/content");
            setOpen(false);
          }}
          active={router.pathname === "/content"}
          svgIcon={<ContentIcon />}
          label="Content"
        />
        <SidebarListItem
          onClick={() => {
            router.push("/users");
            setOpen(false);
          }}
          active={router.pathname === "/users"}
          svgIcon={<UserIcons />}
          label="Users"
        />
      </div>
      <div>
        <SidebarListItem
          svgIcon={<LogoutIcon />}
          label="Logout"
          style={{ marginBottom: "0px" }}
          onClick={logout}
        />
      </div>
    </Drawer>
  );
}
