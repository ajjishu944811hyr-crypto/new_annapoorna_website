import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { RESTAURANT } from "../data/site";

export const Location = () => {
  return (
    <section
      id="location"
      data-testid="location-section"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
              ✦ Find Us
            </div>
            <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2B2B2B]">
              On the main road,{" "}
              <span className="italic text-[#C96A2B]">in the heart of Hiriyur.</span>
            </h2>

            <div className="mt-10 space-y-6">
              <Row icon={<MapPin size={18} />} label="Address" value={RESTAURANT.address} />
              <Row icon={<Phone size={18} />} label="Phone" value={RESTAURANT.phone} link={`tel:${RESTAURANT.phoneRaw}`} testid="loc-phone" />
              <Row icon={<Mail size={18} />} label="Email" value={RESTAURANT.email} link={`mailto:${RESTAURANT.email}`} testid="loc-email" />
              <div className="flex gap-4">
                <span className="h-11 w-11 rounded-full bg-[#2F5D50]/10 grid place-items-center text-[#2F5D50] shrink-0">
                  <Clock size={18} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#5C5C5C]">
                    Working hours
                  </div>
                  <ul className="mt-2 space-y-1.5 text-[#2B2B2B]">
                    {RESTAURANT.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span className="font-medium">{h.day}</span>
                        <span className="text-[#5C5C5C]">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={RESTAURANT.mapsLink}
              target="_blank"
              rel="noreferrer"
              data-testid="loc-directions"
              className="mt-10 btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold"
            >
              Get Directions
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] overflow-hidden border border-[#EADECF] shadow-[0_30px_60px_rgba(43,43,43,0.10)] h-[460px] md:h-[560px] bg-white">
              <iframe
                title="Sri Sai Annapoorna Grand Location"
                src={RESTAURANT.mapEmbed}
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="loc-map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ icon, label, value, link, testid }) => (
  <div className="flex gap-4">
    <span className="h-11 w-11 rounded-full bg-[#2F5D50]/10 grid place-items-center text-[#2F5D50] shrink-0">
      {icon}
    </span>
    <div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-[#5C5C5C]">
        {label}
      </div>
      {link ? (
        <a
          href={link}
          data-testid={testid}
          className="font-display text-lg md:text-xl text-[#2B2B2B] hover:text-[#C96A2B] transition-colors"
        >
          {value}
        </a>
      ) : (
        <div className="font-display text-lg md:text-xl text-[#2B2B2B]">{value}</div>
      )}
    </div>
  </div>
);
