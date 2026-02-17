"use client";

import { AlertCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function ChromeHelp() {
  const [ua, setUa] = useState<string>("");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setUa(navigator.userAgent || "");
    }
  }, []);

  const isChrome = useMemo(() => {
    // Basic heuristic: Chrome but not Edge.
    return /Chrome\//.test(ua) && !/Edg\//.test(ua);
  }, [ua]);

  if (!isChrome) {
    return (
      <div className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
        To use MediReport Assist, open this site in <b>Google Chrome</b>.
      </div>
    );
  }

  return (
    <>
      <div className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
        You’re in <b>Chrome</b>, but local AI isn’t enabled yet. Here’s how to
        turn it on.
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="font-medium text-slate-900 dark:text-slate-100">
          Enable Chrome built-in AI
        </div>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            Join the{" "}
            <Link
              href="https://developer.chrome.com/docs/ai/built-in#get_an_early_preview"
              className="underline underline-offset-2"
              target="_blank"
            >
              Early Preview Program
            </Link>
            .
          </li>
          <li>
            Update Chrome to the latest version (chrome://settings/help).
          </li>
          <li>
            Enable the built-in AI / Prompt API feature flags if instructed by
            the preview program.
          </li>
          <li>Restart Chrome and refresh this page.</li>
        </ol>
      </div>

      <div className="mt-4 text-xs text-slate-500 dark:text-slate-500">
        Tip: After enabling, refresh this page.
      </div>
    </>
  );
}

export default function Error() {
  return (
    <div className="relative flex min-h-[60vh] w-full items-center justify-center px-4 py-10">
      {/* subtle animated background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl dark:bg-slate-800/40 animate-pulse" />
        <div className="absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-slate-200/50 blur-3xl dark:bg-slate-800/30 animate-pulse" />
      </div>

      <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300">
            <AlertCircle className="h-6 w-6" />
          </div>

          <div className="flex-1">
            <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Local AI not available
            </div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Your browser doesn’t support the Chrome built-in Prompt API yet.
            </div>
          </div>

          <Sparkles className="h-5 w-5 text-slate-400 dark:text-slate-500" />
        </div>

        <ChromeHelp />
      </div>
    </div>
  );
}
