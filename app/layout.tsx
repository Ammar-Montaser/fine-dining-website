import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sachi - Home",
  description:
    "Test Website - Located in Heliopolis, Park St and Almaza Bay, Sachi restaurants were voted the best restaurant in Egypt by 'The World's 50 Best Restaurants' in 2022.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
