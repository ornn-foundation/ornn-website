import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FF92A5",
      contrastText: "#0E1318",
    },
    secondary: {
      main: "#0E1318",
    },
    error: {
      main: red.A400,
    },
    info: {
      main: "#0E1318",
    },
    action: {
      active: "#FF647F",
    },
  },
});

export default theme;
