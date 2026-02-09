import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import Navbar from "../components/navigation/Navbar";

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
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
