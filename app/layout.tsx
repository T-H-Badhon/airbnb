import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientHydration from "./components/ClientHydration";
import RegistrationModal from "./components/modals/RegistrationModal";
import ToastProvider from "./provider/ToastProvider";
import HomePage from '../app/components/Home/HomePage'
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
        {/* <ClientHydration>
          <ToastProvider />
          <RegistrationModal></RegistrationModal>
          <Navbar />
          {/* <HomePage /> */}
        {/* </ClientHydration> */}
        {/* <Navbar /> */} 
        {children}
      </body>
    </html>
  );
}
