import React from "react";

export const metadata = {
  title: "Holy Child School",
  description: "Holy Child Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
