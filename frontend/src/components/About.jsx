import React from "react";
import { IMAGES } from "../data/site";

const items = [
  "Pure Veg",
  "Family Friendly",
  "Filter Coffee",
  "Banana Leaf Meals",
  "Affordable",
  "Hiriyur · Karnataka",
  "Since 2009",
  "Open All Days",
];

export const Marquee = () => {
  const row = [...items, ...items];
  return (
    <section
      data-testid="marquee-strip"
      className="border-y border-[#EADECF] bg-[#FFF6E9] overflow-hidden"
      aria-label="restaurant highlights"
    >
      <div className="marquee-track flex whitespace-nowrap py-5">
        {row.map((it, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-8 text-[#2F5D50] font-display italic text-xl md:text-2xl"
          >
            <span>{it}</span>
            <span className="text-[#C96A2B]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_30px_60px_rgba(43,43,43,0.12)]">
            <img
              src={IMAGES.interior}
              alt="Warm restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-10 -right-10 w-44 h-44 rounded-2xl overflow-hidden border-[6px] border-[#FFF6E9] shadow-[0_20px_50px_rgba(43,43,43,0.18)]">
            <img
              src={IMAGES.entrance}
              alt="Sri Sai Annapoorna Grand entrance"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-5">
            ✦ Our Story
          </div>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2B2B2B]">
            A neighbourhood kitchen,{" "}
            <span className="italic text-[#C96A2B]">
              built on warmth & flavour.
            </span>
          </h2>

          <p className="mt-7 text-base sm:text-lg leading-relaxed text-[#5C5C5C] max-w-xl">
            Formerly known as <span className="font-semibold text-[#2B2B2B]">Annapoorna
            Hotel</span>, our family-run kitchen has been feeding Hiriyur
            since <span className="font-semibold text-[#2B2B2B]">2009</span>. In 2024,
            we reopened with a fresh look as <span className="font-semibold text-[#2B2B2B]">Sri Sai
            Annapoorna Grand</span> — same family, same recipes, generous spirit.
            Our signature{" "}
            <span className="italic text-[#C96A2B] font-medium">Holige</span>{" "}
            comes in three traditional varieties — Bele, Kayi and Bili —
            handmade fresh every morning.
          </p>

          <blockquote className="mt-8 border-l-2 border-[#C96A2B] pl-5 font-display italic text-xl md:text-2xl text-[#2B2B2B] max-w-xl">
            “Comfort food that feels like home — affordable, filling, and
            familiar.”
          </blockquote>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {[
              { k: "Heritage", v: "Family-run since 2009" },
              { k: "Signature", v: "Holige · 3 varieties" },
              { k: "Value", v: "₹20 — ₹200 per person" },
            ].map((s) => (
              <div
                key={s.k}
                className="bg-white border border-[#EADECF] rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-[#2F5D50]">
                  {s.k}
                </div>
                <div className="mt-2 font-display text-lg text-[#2B2B2B]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
