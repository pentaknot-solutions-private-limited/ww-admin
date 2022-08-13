import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#640E27",
      dark: "#7e1735ed",
      contrastText: "#F7F3D0",
    },
    info: {
      light: "#EAFCF7",
      main: "#EAFCF7",
      dark: "#007254",
      contrastText: "#535353",
    },
    secondary: {
      main: "rgba(63, 81, 181, 0.08);",
    },
  },
  typography: {
    fontFamily: "'SF Compact Display','SF Pro Display'",
  },
});

theme.typography.h1 = {
  fontSize: "34px",
  color: "#2E2E2E",
};
theme.typography.h2 = {
  fontSize: "32px",
  fontWeight: 500,
};
theme.typography.h3 = {
  fontSize: "24px",
};
theme.typography.h4 = {
  fontSize: "20px",
  fontWeight: 500,
};
theme.typography.h5 = {
  fontSize: "18px",
  fontWeight: 500,
};
theme.typography.h6 = {
  fontSize: "16px",
  fontWeight: 400,
};
theme.typography.body1 = {
  fontSize: "14px",
};
theme.typography.body2 = {
  fontSize: "14px",
  fontWeight: 500,
};
theme.typography.caption = {
  fontSize: "12px",
};
export default theme;
