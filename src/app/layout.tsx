import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
import AppWrapper from "@/components/AppWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhun",
  description: "Dhun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Toaster position="top-right" reverseOrder={false} />
      <StoreProvider>
        <AppWrapper>{children}</AppWrapper>
      </StoreProvider>
    </body>
  </html>
  );
}
