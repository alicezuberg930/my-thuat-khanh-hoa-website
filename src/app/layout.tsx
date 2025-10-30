import "./globals.css";
import localFont from "next/font/local";
import createMetadata, { NextMetadata } from "@/lib/seo"
import { Footer, Header } from "@/sections/home";
import { MotionLazyContainer } from "@/components/animate";
import { FAB } from "@/components/ui/Fab";
import { PhoneCall } from "lucide-react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/sections/home/AppSidebar";

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

export const metadata: NextMetadata = createMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider open={false}>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <MotionLazyContainer>
              {children}
            </MotionLazyContainer>
            <Footer />
            <FAB variant={'info'} className="bg-green-600 hover:bg-green-600/80">
              <PhoneCall size={28} />
            </FAB>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
