import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MENU_CATEGORIES } from "../data/site";

export const Menu = () => {
  const [active, setActive] = useState(MENU_CATEGORIES[0].id);
  const activeCat = MENU_CATEGORIES.find((c) => c.id === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="py-24 md:py-32 bg-gradient-to-b from-[#FFF6E9] to-[#FBEFD9]/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
              ✦ The Menu
            </div>
            <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight text-[#2B2B2B] max-w-3xl">
              Made fresh, served warm,{" "}
              <span className="italic text-[#C96A2B]">priced kindly.</span>
            </h2>
          </div>
          <p className="text-[#5C5C5C] max-w-md md:text-right">
            From breakfast tiffin to a full thali, every dish on our menu sits
            under ₹200 — so you can come back, often.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[260px] md:auto-rows-[300px]">
          {MENU_CATEGORIES.map((cat, i) => {
            const spans = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5 md:row-span-1",
              "md:col-span-5 md:row-span-1",
              "md:col-span-7 md:row-span-1",
            ];
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                data-testid={`menu-cat-${cat.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`bento-card ${spans[i]} text-left group`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/30 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-[#FFF6E9]">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.25em] uppercase bg-[#FFF6E9]/15 backdrop-blur px-3 py-1.5 rounded-full border border-white/20">
                      {`0${i + 1}`} / {`0${MENU_CATEGORIES.length}`}
                    </span>
                    <span
                      className={`h-9 w-9 rounded-full grid place-items-center transition-all ${
                        active === cat.id
                          ? "bg-[#C96A2B] text-[#FFF6E9]"
                          : "bg-white/15 backdrop-blur border border-white/30 group-hover:bg-[#C96A2B]"
                      }`}
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[#FFF6E9]/85 mt-2 max-w-md">
                      {cat.blurb}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Item list panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 bg-white border border-[#EADECF] rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          data-testid="menu-active-panel"
        >
          <div className="flex items-center justify-between mb-7">
            <h3 className="font-display text-2xl md:text-3xl text-[#2B2B2B]">
              {activeCat.title}
            </h3>
            <div className="text-xs uppercase tracking-[0.2em] text-[#2F5D50]">
              ✦ Featured picks
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {activeCat.items.map((it) => (
              <div
                key={it.name}
                data-testid={`menu-item-${it.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="flex items-baseline justify-between gap-3 pb-4 border-b border-dashed border-[#EADECF]"
              >
                <div>
                  <div className="font-display text-lg text-[#2B2B2B]">
                    {it.name}
                  </div>
                  {it.note && (
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#C96A2B] mt-1">
                      {it.note}
                    </div>
                  )}
                </div>
                <div className="font-display text-lg text-[#2F5D50]">
                  {it.price}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <a
              href="#reservation"
              data-testid="menu-cta-reserve"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              Reserve a Table
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
