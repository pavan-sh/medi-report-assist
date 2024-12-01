"use client";

import BloodReport from "@/app/blood-report/_bloodReport";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BloodReport />
      </main>

      <footer className="flex items-center justify-end fixed bottom-0 inset-x-0 mx-auto">
        MediReport Assist - {new Date().getFullYear()}
      </footer>
    </div>
  );
}
