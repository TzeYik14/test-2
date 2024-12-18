import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payy.services",
  description: "Financial Technology Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Payy.services</title>
        <meta name="description" content={'metadata.description'} />
      </head>
      <body className={inter.className}>
        <NavBar />
        <div className="flex justify-center pt-10">{children}</div>
      </body>
    </html>
  );
}
