import { ThemeProvider, Typography, createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const Style = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant={theme.breakpoints.up("md") ? "h4" : "h6"}>
          Hello, World!
        </Typography>
      </div>
    </ThemeProvider>
  );
};
