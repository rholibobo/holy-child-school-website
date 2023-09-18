"use client";
import Footer from "./components/Footer/footer";
import "./globals.css";
import { Poppins, Kanit } from "next/font/google";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Holy Child School",
  description: "Holy Child School Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          {children}

          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
