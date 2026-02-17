"use client";

import BloodReport from "@/app/blood-report/_bloodReport";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-100px)] font-[family-name:var(--font-geist-sans)]">
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <BloodReport />
      </main>

      <footer className="mx-auto w-full max-w-6xl px-4 pb-6 text-sm text-slate-500 dark:text-slate-400">
        MediReport Assist © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
