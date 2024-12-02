"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center ">
      <AlertCircle className="w-24 h-24 text-red-500" />

      <div className="text-3xl font-bold mb-4 text-center pt-4">Oops!</div>

      <div className="text-xl mb-8 text-center max-w-md">
        It looks like your browser does not support the Prompt API. If you are
        using Chrome, you can get early access by joining the{" "}
        <Link
          href="https://developer.chrome.com/docs/ai/built-in#get_an_early_preview"
          className="underline"
          target="_blank"
        >
          Early Preview Program.
        </Link>
      </div>
    </div>
  );
}
