import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/globals.css";
import { Toaster } from "@/ui/sonner";
import Image from "next/image";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MediReport Assist App",
  description:
    "Streamlining healthcare documentation with intelligent report generation, Powered by Google Chrome Built-in AI!",
};

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
        <header className="header flex flex-row justify-center align-middle pt-3">
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={45}
            className="rounded-md"
          />
          <div className="flex flex-col justify-start pl-2 self-center">
            <div className="text-4xl">MediReport Assist</div>
            <div>
              Streamlining healthcare documentation with intelligent report
              generation, Powered by Google Chrome Built-in AI.
            </div>
          </div>
        </header>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
