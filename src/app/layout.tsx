import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import createMetadata from "@/lib/seo";
import { Footer, Header } from "@/sections/home";
import { MotionLazyContainer } from "@/components/animate";
import { FAB } from "@/components/ui/Fab";
import { PhoneCall } from "lucide-react";

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

export const metadata: Metadata = createMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <MotionLazyContainer>
          {children}
        </MotionLazyContainer>
        <Footer />
        <FAB variant={'info'}>
          <PhoneCall size={24} />
        </FAB>
      </body>
    </html>
  );
}
