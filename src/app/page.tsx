"use client";

import BloodReport from "@/app/blood-report/_bloodReport";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-100px)] font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <BloodReport />
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-2 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex flex-col gap-2 border-t border-slate-200/70 pt-4 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} MediReport Assist</div>
            <div className="flex items-center gap-3">
              <a
                href="/privacy-policy"
                target="_blank"
                className="hover:text-slate-900 dark:hover:text-slate-100"
              >
                Privacy
              </a>
              <a
                href="https://github.com/pavan-sh/medi-report-assist"
                target="_blank"
                className="hover:text-slate-900 dark:hover:text-slate-100"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="text-xs leading-5">
            Runs fully on your device. No medical advice.
          </div>
        </div>
      </footer>
    </div>
  );
}
