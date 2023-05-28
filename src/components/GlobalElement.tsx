import { Button, Drawer, TableContainer, TextField } from "@mui/material";
import { styled } from "@mui/system";

export const SecondaryButton = styled(Button)`
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  border-radius: 4px;
  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;
export const TertiaryButton = styled(Button)`
  font-weight: 500;
  font-size: 14px;
  box-shadow: none;
  background-color: rgb(249, 249, 249);
  &:hover {
    background-color: rgb(237, 237, 238);
    box-shadow: none;
  }
  border: 1px solid rgb(194, 194, 194);
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.87);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px 10px;
  height: 30px;
`;

export const StyledTextField = styled(TextField)`
  background: rgba(33, 33, 33, 0.08);
  border-radius: 4px;
  input,
  input::placeholder,
  textarea {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.87);
    opacity: 1;
  }
  margin-bottom: 15px;
  fieldset {
    display: none !important;
  }
`;

export const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    max-width: 430px;
    width: 100%;
  }
`;

export const CommentDrawerHeader = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;

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
  th {
    font-weight: 600;
    font-size: 16px;
    color: #272833;
    font-family: inherit;
  }
`;
