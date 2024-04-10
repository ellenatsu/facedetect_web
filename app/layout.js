import { Inter } from "next/font/google";
import "./globals.css";
import 'tachyons';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Detect Face in Image ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
