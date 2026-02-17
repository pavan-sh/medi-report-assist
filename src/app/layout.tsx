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
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/40">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-4">
            <Image
              src="/logo.svg"
              alt="logo"
              width={44}
              height={44}
              className="rounded-md"
            />
            <div className="flex flex-col">
              <div className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                MediReport Assist
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Local, on-device blood report summary using Chrome built-in AI.
              </div>
            </div>
          </div>
        </header>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
