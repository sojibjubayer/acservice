"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Phone,
  Snowflake,
  X,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-white/10 bg-[#061322] px-4 py-2 text-white/75 md:block">
        <div className="section-shell flex items-center justify-between text-xs">
          <p>{siteConfig.workingHours}</p>

          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition hover:text-cyan-300"
            >
              {siteConfig.email}
            </a>

            <span>{siteConfig.address}</span>
          </div>
        </div>
      </div>

      <nav className="border-b border-white/10 bg-[#071629]/90 shadow-lg shadow-slate-950/10 backdrop-blur-xl">
        <div className="section-shell flex h-18.5 items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="relative flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-300 to-cyan-600 text-[#062138] shadow-lg shadow-cyan-500/20 transition group-hover:rotate-6">
              <Snowflake size={25} strokeWidth={2.4} />
            </span>

            <span>
              <span className="font-display block text-lg font-bold leading-none text-white">
                {siteConfig.shortName}
              </span>

              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                AC Services Qatar
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-white/75 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
            >
              <Phone size={16} />
              {siteConfig.phoneDisplay}
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Book Service
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex size-11 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#071629] transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="section-shell flex flex-col gap-2 py-5">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href={siteConfig.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}