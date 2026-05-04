import React from "react";
import { RESTAURANT } from "../data/site";

const waNumber = "919590826668"; // E.164 without '+'
const message = encodeURIComponent(
  "Hi! I'd like to place an order from Sri Sai Annapoorna Grand."
);

export const WhatsAppFab = () => {
  return (
    <a
      href={`https://wa.me/${waNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Order on WhatsApp"
      className="fixed bottom-20 right-5 md:bottom-6 md:right-6 z-[60] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:bg-[#1ea954] transition-all hover:-translate-y-0.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9zm-7.05 16a8.32 8.32 0 0 1-4.25-1.16l-.31-.18-2.21.63.62-2.16-.2-.32A8.33 8.33 0 1 1 12 20.91zm4.59-6.21c-.25-.13-1.46-.72-1.69-.8s-.39-.13-.55.13-.63.79-.77.96-.28.19-.53.06a6.84 6.84 0 0 1-2-1.24 7.55 7.55 0 0 1-1.39-1.74c-.15-.25 0-.39.11-.51.11-.11.25-.28.37-.42a1.6 1.6 0 0 0 .25-.42.45.45 0 0 0 0-.43c-.06-.13-.55-1.34-.76-1.83s-.4-.42-.55-.43h-.47a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.07 4.84 4.84 0 0 0 1 2.55 11.06 11.06 0 0 0 4.23 3.74c.59.25 1.05.4 1.41.51a3.39 3.39 0 0 0 1.55.1 2.55 2.55 0 0 0 1.67-1.18 2.07 2.07 0 0 0 .14-1.18c-.06-.1-.22-.16-.47-.29z" />
        </svg>
        <span className="hidden sm:inline font-medium text-sm tracking-wide">
          Order on WhatsApp
        </span>
      </span>
    </a>
  );
};

export const OrderInline = () => {
  return (
    <a
      href={`https://wa.me/${waNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      data-testid="order-whatsapp-inline"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1ea954] transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_rgba(37,211,102,0.35)]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.07A10 10 0 1 0 19.05 4.9zm-7.05 16a8.32 8.32 0 0 1-4.25-1.16l-.31-.18-2.21.63.62-2.16-.2-.32A8.33 8.33 0 1 1 12 20.91zm4.59-6.21c-.25-.13-1.46-.72-1.69-.8s-.39-.13-.55.13-.63.79-.77.96-.28.19-.53.06a6.84 6.84 0 0 1-2-1.24 7.55 7.55 0 0 1-1.39-1.74c-.15-.25 0-.39.11-.51.11-.11.25-.28.37-.42a1.6 1.6 0 0 0 .25-.42.45.45 0 0 0 0-.43c-.06-.13-.55-1.34-.76-1.83s-.4-.42-.55-.43h-.47a.91.91 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.07 4.84 4.84 0 0 0 1 2.55 11.06 11.06 0 0 0 4.23 3.74c.59.25 1.05.4 1.41.51a3.39 3.39 0 0 0 1.55.1 2.55 2.55 0 0 0 1.67-1.18 2.07 2.07 0 0 0 .14-1.18c-.06-.1-.22-.16-.47-.29z" />
      </svg>
      Order on WhatsApp
    </a>
  );
};

export const phoneForCalls = RESTAURANT.phoneRaw;
