import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { IMAGES, RESTAURANT } from "../data/site";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative pt-[110px] md:pt-[130px] pb-20 md:pb-28 overflow-hidden"
    >
      {/* Premium dining background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.10] pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,246,233,0.7) 0%, rgba(255,246,233,0.95) 60%, #FFF6E9 100%)",
        }}
      />
      {/* Decorative blurred circle */}
      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-[#C96A2B]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-[#2F5D50]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative">
        {/* Left content */}
        <div className="lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fade}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-[#EADECF] mb-6"
            data-testid="hero-badge"
          >
            <Star size={14} className="fill-[#C96A2B] text-[#C96A2B]" />
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-[#2F5D50]">
              {RESTAURANT.rating} ★ · {RESTAURANT.reviewsCount}+ happy diners
            </span>
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-tight text-[#2B2B2B]"
            data-testid="hero-headline"
          >
            Delicious South & North
            <br />
            Indian Meals at{" "}
            <span className="italic text-[#C96A2B] relative">
              Prices You’ll Love
              <svg
                viewBox="0 0 300 14"
                className="absolute left-0 -bottom-2 w-full"
                aria-hidden="true"
              >
                <path
                  d="M2 9 C 80 2, 220 2, 298 9"
                  stroke="#2F5D50"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 text-base sm:text-lg leading-relaxed text-[#5C5C5C] max-w-xl"
            data-testid="hero-subtext"
          >
            Experience homely flavours, satisfying meals, and a welcoming
            dine-in atmosphere on the main road in Hiriyur. Freshly cooked,
            warmly served — every single plate.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#menu"
              data-testid="hero-cta-menu"
              className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold tracking-wide"
            >
              View Menu
              <ArrowRight size={16} />
            </a>
            <a
              href="#location"
              data-testid="hero-cta-visit"
              className="btn-outline-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold tracking-wide"
            >
              <MapPin size={16} /> Visit Us Today
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex items-center gap-7"
          >
            <div>
              <div className="font-display text-3xl text-[#2B2B2B]">2009</div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] mt-1">
                Serving since
              </div>
            </div>
            <div className="h-10 w-px bg-[#EADECF]" />
            <div>
              <div className="font-display text-3xl text-[#2B2B2B]">₹20–200</div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] mt-1">
                Per person
              </div>
            </div>
            <div className="h-10 w-px bg-[#EADECF]" />
            <div className="hidden sm:block">
              <div className="font-display text-3xl text-[#2B2B2B]">40+</div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] mt-1">
                Dishes daily
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right imagery */}
        <div className="lg:col-span-5 relative h-[460px] sm:h-[540px] lg:h-[620px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-0 w-[78%] h-[72%] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(43,43,43,0.18)]"
          >
            <img
              src={IMAGES.heroDosa}
              alt="Crispy butter masala dosa"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 w-[62%] h-[44%] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(43,43,43,0.18)] border-[6px] border-[#FFF6E9]"
          >
            <img
              src={IMAGES.thali}
              alt="Traditional Indian thali"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute top-6 left-2 floaty bg-white rounded-2xl shadow-[0_20px_50px_rgba(43,43,43,0.12)] px-4 py-3 flex items-center gap-3 border border-[#EADECF]"
            data-testid="hero-floating-card"
          >
            <div className="h-10 w-10 rounded-full bg-[#FFF6E9] grid place-items-center">
              <span className="text-lg">🍯</span>
            </div>
            <div className="leading-tight">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#2F5D50]">
                Our Signature
              </div>
              <div className="font-display text-sm text-[#2B2B2B]">
                Holige · Bele · Kayi · Bili
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
