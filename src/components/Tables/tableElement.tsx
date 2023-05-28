import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import {
  TableCell,
  TableContainer,
  TableRow,
  TableFooter,
  Button,
  Drawer,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

export const SearchWrapper = styled("div")(({ theme }) => ({
  display: "block",
  width: "100%",
  maxWidth: "300px",
  margin: "0 0 0 auto",
  fontFamily: "SF Compact Display",
  background: "#fff",
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(33, 33, 33, 0.08);",
  width: "100%",
  fontFamily: "SF Compact Display",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "SF Compact Display",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    fontFamily: "SF Compact Display",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const LayoutWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  fontFamily: "SF Compact Display",
  "@media (max-width: 1200px)": {
    display: "block",
  },
}));

export const WrapperContainer = styled("div")`
  padding: 20px 40px;
  background: #fffef5;
  width: 100%;
  height: 100vh;
  font-family: "SF Compact Display";
  @media screen and (max-width: 1200px) {
    padding: 20px 20px 20px 100px;
  }
`;
export const TextwrapperContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  font-family: "SF Compact Display";
`;

export const DashboardCard = styled(Box)`
  padding: 30px 24px;
  border-radius: 8px;
  box-shadow: 0px 10px 13px rgba(17, 38, 146, 0.05);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 366px;
  font-family: "SF Compact Display";
  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  border: "1px solid rgba(224, 224, 224, 1)",
  borderRadius: "0px 0px 4px 4px",
  marginBottom: "30px",
  fontFamily: "SF Compact Display",
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "#272833",
    fontSize: 16,
    fontWeight: 600,
    whiteSpace: "nowrap",
    fontFamily: "SF Compact Display",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "SF Compact Display",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  "&:nth-of-type(odd)": {
    backgroundColor: "#F9F9F9",
    fontFamily: "SF Compact Display",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#FFFFFF",
    fontFamily: "SF Compact Display",
  },
  // hide last border
  "& td": {
    border: 0,
    fontFamily: "SF Compact Display",
  },
}));

export const StyledTableFooter = styled(TableFooter)(({ theme }) => ({
  borderTop: "1px solid rgba(224, 224, 224, 1)",
  backgroundColor: "#fff",
  fontFamily: "SF Compact Display",
  "& td": {
    border: 0,
    fontFamily: "SF Compact Display",
  },
}));

// dashboard nested page componentStyling

export const LightGrayText = styled("h3")`
  font-weight: 500;
  font-size: 24px;
  color: #bdbdbd;
  margin: 0px 0px 15px 0px;
  text-transform: capitalize;
  font-family: "SF Compact Display";
`;

export const FlexSpaceBetween = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "SF Compact Display";
  margin-bottom: 15px;
`;

export const IdText = styled("h2")`
  font-size: 48px;
  font-weight: 400;
  color: #000000;
  margin: 0px 0px 15px 0px;
  font-family: "SF Compact Display";
`;

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(63, 81, 181, 0.08)",
  border: "1px solid rgba(63, 81, 181, 0.5)",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "500",
  color: "rgba(0, 0, 0, 0.87)",
  boxShadow: "none",
  fontFamily: "SF Compact Display",
  ":hover": {
    backgroundColor: "rgba(63, 81, 181, 0.08)",
    color: "rgba(0, 0, 0, 0.87)",
  },
}));

export const InfoCardWrapper = styled("div")`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 12px 24px;
  margin: 25px 0px;
  font-family: "SF Compact Display";
`;

export const StyledDisabledField = styled(TextField)`
  background: rgba(33, 33, 33, 0.08);
  border-radius: 4px 4px 0px 0px;
  color: rgba(0, 0, 0, 0.87);
  font-family: "SF Compact Display";
  & .MuiOutlinedInput-notchedOutline {
    border: none;
    font-family: "SF Compact Display";
  }
`;

export const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    max-width: 430px;
    width: 100%;
    font-family: "SF Compact Display";
  }
`;

export const CommentDrawerHeader = styled("div")`
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;
  font-family: "SF Compact Display";
  & h5 {
    font-size: 20px;
    color: #373737;
    font-weight: 400;
    margin: 0px;
  }
`;

export const CommentTableContainer = styled(TableContainer)`
  padding: 15px 10px;
  border: 0px;
  box-shadow: none;
  font-family: "SF Compact Display";
  & .MuiTable-root {
    border: 1px solid #e7e7ed;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;
