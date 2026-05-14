"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function EventModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay so the page renders first, then the modal animates in
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Trigger the entrance animation after mount
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for exit animation before unmounting
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-4xl flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isVisible
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-4 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/ai-summit.webp"
            alt="Upcoming Event"
            fill
            className="object-fill"
            priority
          />
        </div>

        {/* CTA area — below the image */}
        <div className="px-6 py-3 text-center">
          <a
            href="https://gcapacityhub.co.uk/forms/event-registration.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-lg bg-[#eb0f53] hover:bg-[#d00d4a] text-white font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Register Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
