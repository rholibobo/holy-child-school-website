"use client";

import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { Poppins } from "next/font/google";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Holy Child School</title>
        <meta name="description" content="Holy Child School Website" />
      </head>
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
