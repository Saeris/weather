import React from "react";
import { Inter } from "next/font/google";
import "../theme/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "weather",
  description: "simple weather app"
};

const Root: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default Root;
