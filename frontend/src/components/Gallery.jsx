import React from "react";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "../data/site";

const layouts = [
  "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
  "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto",
  "md:col-span-4 aspect-square",
  "md:col-span-4 aspect-square",
];

export const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
              ✦ The Gallery
            </div>
            <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2B2B2B] max-w-2xl">
              A peek into our{" "}
              <span className="italic text-[#C96A2B]">kitchen & tables.</span>
            </h2>
          </div>
          <p className="text-[#5C5C5C] max-w-md md:text-right">
            Sizzling tawas, fresh-pressed dosas, brimming thalis and the warm
            glow of our dining room.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group ${layouts[i]} bento-card`}
              data-testid={`gallery-img-${i}`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
