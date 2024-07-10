"use client";
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { usePathname } from "next/navigation";

const metadata: Metadata = {
  title: "Sachi - Home",
  description:
    "Test Website - Located in Heliopolis, Park St and Almaza Bay, Sachi restaurants were voted the best restaurant in Egypt by 'The World's 50 Best Restaurants' in 2022.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname != "/")
    return (
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
        </head>
        <body
          className={
            "min-h-screen w-full flex flex-col justify-between items-center"
          }
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    );
  else {
    return (
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
            rel="stylesheet"
          />
        </head>
        <body
          className={"min-h-screen flex flex-col justify-between items-center"}
        >
          {children}
        </body>
      </html>
    );
  }
}
