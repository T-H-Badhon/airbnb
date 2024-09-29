import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientHydration from "./components/ClientHydration";
// import Modal from "./components/modals/Modal";
// import {Nunito} from "next/font/google"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AirBnb",
  description: "Airbnb Clone",
};

// const font = Nunito({
//   subsets:["latin"]
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Modal ></Modal> */}
        <ClientHydration>
          <Navbar />
        </ClientHydration>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
