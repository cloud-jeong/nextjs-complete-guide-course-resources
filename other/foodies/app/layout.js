// import { Geist, Geist_Mono } from "next/font/google";
import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Foodies",
  description: "Share food information to others",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader></MainHeader>

        {children}
      </body>
    </html>
  );
}
