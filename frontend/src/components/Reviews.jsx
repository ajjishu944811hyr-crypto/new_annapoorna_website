import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS, RESTAURANT } from "../data/site";

export const Reviews = () => {
  const [idx, setIdx] = useState(0);
  const total = REVIEWS.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % total), 6500);
    return () => clearInterval(t);
  }, [total]);

  const next = () => setIdx((p) => (p + 1) % total);
  const prev = () => setIdx((p) => (p - 1 + total) % total);
  const r = REVIEWS[idx];

  return (
    <section
      id="reviews"
      data-testid="reviews-section"
      className="py-24 md:py-32 bg-[#FFF6E9]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
              ✦ Loved by our diners
            </div>
            <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2B2B2B]">
              Real plates.{" "}
              <span className="italic text-[#C96A2B]">Real reviews.</span>
            </h2>

            <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-[#EADECF] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(RESTAURANT.rating)
                        ? "fill-[#C96A2B] text-[#C96A2B]"
                        : "text-[#EADECF]"
                    }
                  />
                ))}
              </div>
              <div className="leading-tight">
                <div className="font-display text-xl text-[#2B2B2B]">
                  {RESTAURANT.rating} / 5
                </div>
                <div className="text-xs text-[#5C5C5C]">
                  {RESTAURANT.reviewsCount}+ verified diners
                </div>
              </div>
            </div>

            <p className="mt-8 text-[#5C5C5C] leading-relaxed max-w-md">
              We hear every review — the great and the not-so-great. We’re
              committed to improving service and delivering a better experience
              every visit.
            </p>
          </div>

          {/* Right - testimonial */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EADECF] shadow-[0_20px_50px_rgba(43,43,43,0.08)] relative overflow-hidden min-h-[340px]">
              <Quote
                className="absolute -top-4 -right-2 text-[#C96A2B]/15"
                size={140}
                strokeWidth={1}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45 }}
                  className="relative"
                  data-testid={`review-card-${idx}`}
                >
                  <div className="flex mb-5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#C96A2B] text-[#C96A2B]"
                      />
                    ))}
                  </div>
                  <p className="font-display italic text-xl md:text-2xl text-[#2B2B2B] leading-relaxed">
                    “{r.text}”
                  </p>
                  <div className="mt-7 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#2F5D50] text-[#FFF6E9] grid place-items-center font-display text-lg">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-[#2B2B2B]">
                        {r.name}
                      </div>
                      <div className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] mt-0.5">
                        {r.place}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    data-testid={`review-dot-${i}`}
                    aria-label={`Review ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === idx
                        ? "w-8 bg-[#C96A2B]"
                        : "w-2 bg-[#EADECF] hover:bg-[#C96A2B]/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  data-testid="review-prev"
                  className="h-11 w-11 rounded-full border border-[#EADECF] bg-white grid place-items-center hover:border-[#C96A2B] hover:text-[#C96A2B] transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  data-testid="review-next"
                  className="h-11 w-11 rounded-full bg-[#C96A2B] text-[#FFF6E9] grid place-items-center hover:bg-[#A65520] transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
