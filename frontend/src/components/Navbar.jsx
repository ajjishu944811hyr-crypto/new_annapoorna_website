import React, { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { NAV_LINKS, RESTAURANT } from "../data/site";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF6E9]/85 backdrop-blur-xl border-b border-[#EADECF]/70 shadow-[0_4px_20px_rgba(43,43,43,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-[72px]">
        <a
          href="#home"
          data-testid="nav-logo"
          className="flex items-center gap-2.5 group"
        >
          <span className="h-9 w-9 rounded-full bg-[#C96A2B] text-[#FFF6E9] grid place-items-center font-display text-lg shadow-[0_8px_20px_rgba(201,106,43,0.35)]">
            S
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[15px] md:text-[17px] font-bold text-[#2B2B2B] tracking-tight">
              SRI SAI ANNAPOORNA
            </span>
            <span className="block font-display italic text-[#C96A2B] text-[11px] md:text-[12px] tracking-[0.25em] uppercase -mt-0.5">
              Grand · Hiriyur
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="nav-link text-sm font-medium tracking-wide text-[#2B2B2B]/85 hover:text-[#C96A2B]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reservation"
            data-testid="nav-cta-reserve"
            className="hidden md:inline-flex btn-primary px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
          >
            Book a Table
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-[#EADECF] bg-white/70 backdrop-blur"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          data-testid="nav-mobile-menu"
          className="md:hidden bg-[#FFF6E9] border-t border-[#EADECF] px-6 py-6"
        >
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`${l.testid}-mobile`}
                className="text-base font-medium text-[#2B2B2B]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              data-testid="nav-cta-reserve-mobile"
              className="btn-primary px-5 py-3 rounded-full text-sm font-semibold text-center mt-2"
            >
              Book a Table
            </a>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="text-sm text-[#5C5C5C]"
              data-testid="nav-mobile-phone"
            >
              {RESTAURANT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
