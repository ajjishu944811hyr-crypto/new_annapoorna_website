import React from "react";
import { motion } from "framer-motion";
import {
  Cake,
  Heart,
  Crown,
  PartyPopper,
  ChefHat,
  Utensils,
  Users,
  Calendar,
  ArrowUpRight,
} from "lucide-react";
import { PARTY_IMAGES, CATERING_FEATURES, RESTAURANT } from "../data/site";

const occasionIcons = [
  { icon: Cake, label: "Birthday Parties" },
  { icon: Heart, label: "Naming Ceremony" },
  { icon: Crown, label: "Engagement" },
  { icon: PartyPopper, label: "Anniversary" },
];

const cateringIcons = [Users, Utensils, ChefHat, Calendar];

export const Events = () => {
  return (
    <section
      id="events"
      data-testid="events-section"
      className="py-24 md:py-32 bg-gradient-to-b from-[#FFF6E9] via-[#F8E9CF]/40 to-[#FFF6E9]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
              ✦ Party & Events
            </div>
            <h2 className="font-display text-[38px] sm:text-[48px] lg:text-[60px] leading-[1.02] tracking-tight text-[#2B2B2B]">
              Sri Sai{" "}
              <span className="italic text-[#C96A2B]">Convention Hall</span>
            </h2>
            <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2F5D50]/10 border border-[#2F5D50]/20">
              <span className="h-2 w-2 rounded-full bg-[#2F5D50]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#2F5D50] font-medium">
                1st Floor of Our Hotel
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[#5C5C5C] leading-relaxed text-base md:text-lg">
              Birthday parties, naming ceremonies, engagements, anniversaries —
              celebrate every milestone with us. <span className="text-[#2B2B2B] font-medium">All party packages
              are available</span>, customised to your guest count and budget.
            </p>
          </div>
        </div>

        {/* Occasion pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
          {occasionIcons.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              data-testid={`occasion-${label.replace(/\s+/g, "-").toLowerCase()}`}
              className="bg-white border border-[#EADECF] rounded-2xl p-5 flex items-center gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all"
            >
              <span className="h-11 w-11 rounded-xl bg-[#C96A2B]/10 grid place-items-center text-[#C96A2B] shrink-0">
                <Icon size={20} strokeWidth={1.6} />
              </span>
              <div className="font-display text-base md:text-lg text-[#2B2B2B] leading-tight">
                {label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Party gallery — bento style */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
          {PARTY_IMAGES.map((img, i) => {
            const spans = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-4",
              "md:col-span-4",
              "md:col-span-4",
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
                className={`relative overflow-hidden rounded-2xl group bento-card ${spans[i]}`}
                data-testid={`party-img-${i}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-[#1a1a1a]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-[#FFF6E9]">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#FFF6E9]/70 mb-1">
                    {`0${i + 1}`}
                  </div>
                  <div className="font-display text-xl md:text-2xl">
                    {img.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Catering Services */}
        <div className="mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
              ✦ Catering Services
            </div>
            <h3 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05] tracking-tight text-[#2B2B2B]">
              Off-site catering,{" "}
              <span className="italic text-[#C96A2B]">on-point flavour.</span>
            </h3>
            <p className="mt-6 text-[#5C5C5C] leading-relaxed max-w-md">
              From an intimate house pooja to a 500-guest reception, our
              catering team brings the same fresh, lovingly cooked food you
              know us for — straight to your venue. Trained service staff,
              live counters, and clean presentation every single time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                data-testid="catering-call"
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold"
              >
                Call to Book Catering
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                data-testid="catering-enquire"
                className="btn-outline-accent inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold"
              >
                Send an Enquiry
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {CATERING_FEATURES.map((f, i) => {
              const Icon = cateringIcons[i % cateringIcons.length];
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  data-testid={`catering-${f.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="bg-white border border-[#EADECF] rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <span className="h-11 w-11 rounded-xl bg-[#2F5D50]/10 grid place-items-center text-[#2F5D50] shrink-0">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <div>
                      <div className="font-display text-lg text-[#2B2B2B] mb-1.5">
                        {f.title}
                      </div>
                      <p className="text-sm text-[#5C5C5C] leading-relaxed">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
