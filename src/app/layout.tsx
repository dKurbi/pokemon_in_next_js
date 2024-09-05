import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { luckiest_guy } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Pokemon List</title>
      </head>
      <body
        className={`${inter.className} ${luckiest_guy.className} bg-gradient-to-br from-yellow-200 to-yellow-500 min-h-screen flex flex-col`}
      >
		<Header />
        <div className="flex-grow pl-8 pr-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
