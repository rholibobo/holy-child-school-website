import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";

export const metadata = {
  title: "Holy Child School",
  description: "Holy Child School Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
