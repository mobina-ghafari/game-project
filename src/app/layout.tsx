import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "../providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Game App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
