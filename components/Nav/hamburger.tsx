"use client";

import { useState } from "react";
import NavLinks from "@/components/Nav/nav-links";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
        className="relative h-10 w-10 rounded-md hover:bg-black/5 transition flex items-center justify-center z-50"
      >
        <span
          className={[
            "absolute h-[2px] w-7 bg-white rounded-full transition-all duration-300",
            open ? "rotate-45 translate-y-0" : "-translate-y-2.5",
          ].join(" ")}
        />
        <span
          className={[
            "absolute h-[2px] w-7 bg-white rounded-full transition-all duration-300",
            open ? "opacity-0" : "opacity-100",
          ].join(" ")}
        />
        <span
          className={[
            "absolute h-[2px] w-7 bg-white rounded-full transition-all duration-300",
            open ? "-rotate-45 translate-y-0" : "translate-y-2.5",
          ].join(" ")}
        />
      </button>

      {/* Backdrop (click to close) */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 z-40"
        />
      )}

      <div
        className={[
          "absolute right-0 mt-2 w-56 rounded-xl bg-[#525e3f] shadow-lg ring-1 ring-black/5 z-50",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <nav className="flex flex-col p-2">
          <div className="flex flex-col">
          <NavLinks onNavigate={() => setOpen(false)} />
          </div>
        </nav>
      </div>
    </div>
  );
}
