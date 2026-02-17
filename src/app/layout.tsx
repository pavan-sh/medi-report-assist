import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/globals.css";
import { Toaster } from "@/ui/sonner";
import Image from "next/image";
import Link from "next/link";

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
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-950/40">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-slate-200/60 to-transparent blur-md dark:from-slate-800/40" />
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={44}
                  height={44}
                  className="relative rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-950"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    MediReport Assist
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                    Client-side
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
                    Local AI
                  </span>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Minimal blood report summary using Chrome built-in on-device AI.
                </div>
              </div>
            </div>

            <nav className="flex items-center gap-3 text-sm">
              <Link
                href="/privacy-policy"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                target="_blank"
              >
                Privacy
              </Link>
              <Link
                href="https://github.com/pavan-sh/medi-report-assist"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                target="_blank"
              >
                GitHub
              </Link>
            </nav>
          </div>
        </header>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
