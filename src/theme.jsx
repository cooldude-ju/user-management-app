import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    primary: {
      main: "#6366F1",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#94a3b8",
    },
  },
});

export default darkTheme;
