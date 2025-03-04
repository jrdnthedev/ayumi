import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar/navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal?: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        {modal}
      </body>
    </html>
  );
}
