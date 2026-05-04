import React from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  Wallet,
  Users,
  Sparkles,
  MapPin,
  Heart,
} from "lucide-react";
import { WHY_US } from "../data/site";

const ICONS = { Utensils, Wallet, Users, Sparkles, MapPin, Heart };

export const WhyChooseUs = () => {
  return (
    <section
      data-testid="why-choose-us"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
            ✦ Why diners keep coming back
          </div>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2B2B2B]">
            Six reasons your next meal{" "}
            <span className="italic text-[#C96A2B]">should be with us.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {WHY_US.map((it, i) => {
            const Icon = ICONS[it.icon] || Heart;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                data-testid={`why-${it.title.replace(/\s+/g, "-").toLowerCase()}`}
                className="group"
              >
                <div className="relative inline-flex h-14 w-14 mb-5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-[#2F5D50]/10 transition-transform duration-500 group-hover:scale-110" />
                  <Icon
                    size={22}
                    className="relative text-[#2F5D50]"
                    strokeWidth={1.6}
                  />
                </div>
                <h3 className="font-display text-2xl text-[#2B2B2B] mb-3">
                  {it.title}
                </h3>
                <p className="text-[#5C5C5C] leading-relaxed max-w-sm">
                  {it.body}
                </p>
                <div className="mt-5 h-px w-12 bg-[#C96A2B]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
