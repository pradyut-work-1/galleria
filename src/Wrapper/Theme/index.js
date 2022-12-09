import { ThemeProvider, createTheme } from "@mui/material";

export default function ThemeWrapper({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#231535",
      },
      secondary: {
        main: "#f6f4ff",
      },
      background: {
        main: "#F9F9FA",
      },
    },
    typography: {
      fontFamily: "'DM Sans', sans-serif",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
