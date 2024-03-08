/* eslint-disable camelcase, new-cap */
import React from "react";
import { Merriweather_Sans } from "next/font/google";
import styles from "./styles.module.css";
import "../theme/theme.css";

/* eslint-disable @typescript-eslint/quotes */
const merriweather = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--body"
});
/* eslint-enable @typescript-eslint/quotes */

export const metadata = {
  title: `weather`,
  description: `simple weather app`
};

const Root: React.FC<{
  readonly children: React.ReactNode;
}> = ({ children }) => (
  <html lang="en">
    <body className={merriweather.variable}>
      <main className={styles.content}>{children}</main>
    </body>
  </html>
);

export default Root;
