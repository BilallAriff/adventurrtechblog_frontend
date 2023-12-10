import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans"].join(","),
    color: "#000000",
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export default theme;
