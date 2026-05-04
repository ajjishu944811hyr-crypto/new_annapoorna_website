import React from "react";
import { ArrowUpRight, Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";
import { RESTAURANT, NAV_LINKS } from "../data/site";

export const FinalCTA = () => {
  return (
    <section
      data-testid="final-cta"
      className="relative bg-[#2F5D50] text-[#FFF6E9] overflow-hidden"
    >
      <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#C96A2B]/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#FFF6E9]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-24 md:py-32 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-[#FFF6E9]/70 mb-5">
          ✦ The table is set
        </div>
        <h2 className="font-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.02] tracking-tight">
          Hungry?{" "}
          <span className="italic text-[#C96A2B]">Visit Us Today!</span>
        </h2>
        <p className="mt-6 text-[#FFF6E9]/80 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Enjoy delicious, affordable meals with family and friends — fresh
          dosas, hearty thalis, and a warm welcome.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#reservation"
            data-testid="cta-final-reserve"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
          >
            Reserve a Table
            <ArrowUpRight size={16} />
          </a>
          <a
            href={`tel:${RESTAURANT.phoneRaw}`}
            data-testid="cta-final-call"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border border-[#FFF6E9]/30 text-[#FFF6E9] hover:bg-[#FFF6E9] hover:text-[#2F5D50] transition-colors"
          >
            <Phone size={16} /> Call {RESTAURANT.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#21443A] text-[#FFF6E9]/85"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-display text-2xl text-[#FFF6E9]">
            Sri Sai{" "}
            <span className="italic text-[#C96A2B]">Annapoorna Grand</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#FFF6E9]/70 max-w-sm">
            Comfort food that feels like home — affordable, filling, and
            familiar. Formerly Annapoorna Hotel, serving Hiriyur since 2009.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              data-testid="footer-instagram"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-[#FFF6E9]/20 grid place-items-center hover:bg-[#C96A2B] hover:border-[#C96A2B] transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              data-testid="footer-facebook"
              aria-label="Facebook"
              className="h-10 w-10 rounded-full border border-[#FFF6E9]/20 grid place-items-center hover:bg-[#C96A2B] hover:border-[#C96A2B] transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#FFF6E9]/60 mb-4">
            Explore
          </div>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-testid={`footer-${l.testid}`}
                  className="hover:text-[#C96A2B] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.22em] text-[#FFF6E9]/60 mb-4">
            Visit / Contact
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-[#C96A2B]" />
              <span>{RESTAURANT.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[#C96A2B]" />
              <a href={`tel:${RESTAURANT.phoneRaw}`} className="hover:text-[#FFF6E9]">
                {RESTAURANT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[#C96A2B]" />
              <a href={`mailto:${RESTAURANT.email}`} className="hover:text-[#FFF6E9]">
                {RESTAURANT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#FFF6E9]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-[#FFF6E9]/50">
          <span>
            © {new Date().getFullYear()} Sri Sai Annapoorna Grand. All rights reserved.
          </span>
          <span>Crafted with care in Hiriyur, Karnataka.</span>
        </div>
      </div>
    </footer>
  );
};
