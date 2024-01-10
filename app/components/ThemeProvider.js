"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { useMemo } from "react";

const mainColor = process.env.themeColor || lightBlue[500];

export default function MainThemeProvider({ children }) {
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                overflowX: "hidden",
                minHeight: "100vh",
              },
              a: {
                color: mainColor,
                textDecoration: "none",
              },
            },
          },
        },
        palette: {
          mode: "light",
          primary: {
            main: mainColor,
            contrastText: "#fff",
          },
        },
        typography: {
          fontFamily: [
            "inherit",
            // '-apple-system',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            // 'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
          ].join(","),
        },
        shape: {
          borderRadius: 16,
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
