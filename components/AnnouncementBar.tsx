"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  // Set a CSS custom property on :root so the navbar can offset itself
  useEffect(() => {
    if (dismissed) {
      document.documentElement.style.setProperty("--announcement-height", "0px");
    } else {
      const bar = document.getElementById("announcement-bar");
      if (bar) {
        const height = bar.offsetHeight;
        document.documentElement.style.setProperty(
          "--announcement-height",
          `${height}px`
        );
      }
    }
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      id="announcement-bar"
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 py-2 flex items-center justify-between gap-4">
        {/* Content */}
        <a
          href="https://gcapacityhub.co.uk/forms/event-registration.php"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 flex-1 min-w-0 group"
        >
          {/* Tiny thumbnail */}
          <div className="hidden sm:block relative w-8 h-8 rounded-md overflow-hidden flex-shrink-0 ring-1 ring-white/20">
            <Image
              src="/ai-summit.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <p className="text-xs sm:text-sm font-medium truncate">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eb0f53] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#eb0f53]"></span>
              </span>
              <span className="text-white/60 hidden sm:inline">Upcoming Event</span>
            </span>{" "}
            <span className="text-white">AI Summit — Register now</span>
            <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform text-white/60">
              →
            </span>
          </p>
        </a>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white cursor-pointer"
          aria-label="Dismiss announcement"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M1 1l8 8M9 1L1 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}
