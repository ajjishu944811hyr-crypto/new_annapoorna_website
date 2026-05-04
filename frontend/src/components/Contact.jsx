import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, MessageSquare, User, CheckCircle2, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { RESTAURANT } from "../data/site";

const API = "http://127.0.0.1:8000/api";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || form.message.length < 5) {
    toast.error("Please share your name, email and a short message.");
    return;
  }

  setLoading(true);

  try {
    await axios.post("http://127.0.0.1:8000/api/contact", form);

    setDone(true);
    toast.success("Thanks! We've received your message.");
    setForm({ name: "", email: "", message: "" });

  } catch (err) {
    console.error(err);
    toast.error("Could not send. Please call us instead.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left — info */}
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.25em] text-[#2F5D50] font-medium mb-4">
            ✦ Get in Touch
          </div>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#2B2B2B]">
            Questions, bookings,{" "}
            <span className="italic text-[#C96A2B]">or just saying hi.</span>
          </h2>
          <p className="mt-6 text-[#5C5C5C] leading-relaxed max-w-md">
            We typically respond within a few working hours. For urgent
            queries — catering quotes, large bookings — please give us a quick
            call.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow
              icon={<Phone size={18} />}
              label="Phone"
              value={RESTAURANT.phone}
              href={`tel:${RESTAURANT.phoneRaw}`}
              testid="contact-phone"
            />
            <ContactRow
              icon={<Mail size={18} />}
              label="Email"
              value={RESTAURANT.email}
              href={`mailto:${RESTAURANT.email}`}
              testid="contact-email"
            />
            <ContactRow
              icon={<MapPin size={18} />}
              label="Address"
              value={RESTAURANT.address}
              testid="contact-address"
            />
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[2rem] border border-[#EADECF] shadow-[0_30px_80px_rgba(43,43,43,0.08)] p-8 md:p-12">
            {done ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
                data-testid="contact-success"
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-[#2F5D50]/10 grid place-items-center mb-5">
                  <CheckCircle2 className="text-[#2F5D50]" size={28} />
                </div>
                <h3 className="font-display text-2xl text-[#2B2B2B]">
                  Message received!
                </h3>
                <p className="text-[#5C5C5C] mt-2 max-w-sm mx-auto">
                  We’ll get back to you shortly. Meanwhile, feel free to drop
                  by — the chai is always on.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  data-testid="contact-reset"
                  className="mt-6 text-sm text-[#C96A2B] underline underline-offset-4"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="contact-form"
                className="space-y-5"
              >
                <h3 className="font-display text-2xl md:text-3xl text-[#2B2B2B] mb-2">
                  Drop us a message
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] font-medium flex items-center gap-2 mb-2">
                      <User size={14} /> Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      data-testid="contact-name"
                      placeholder="Your full name"
                      className="w-full bg-[#FFF6E9] border border-[#EADECF] rounded-2xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#C96A2B] focus:ring-2 focus:ring-[#C96A2B]/20"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] font-medium flex items-center gap-2 mb-2">
                      <Mail size={14} /> Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      data-testid="contact-email-input"
                      placeholder="you@email.com"
                      className="w-full bg-[#FFF6E9] border border-[#EADECF] rounded-2xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#C96A2B] focus:ring-2 focus:ring-[#C96A2B]/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] font-medium flex items-center gap-2 mb-2">
                    <MessageSquare size={14} /> Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    data-testid="contact-message"
                    placeholder="Tell us about your event, query or feedback…"
                    className="w-full bg-[#FFF6E9] border border-[#EADECF] rounded-2xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#C96A2B] focus:ring-2 focus:ring-[#C96A2B]/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  data-testid="contact-submit"
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({ icon, label, value, href, testid }) => (
  <div className="flex gap-4">
    <span className="h-11 w-11 rounded-full bg-[#C96A2B]/10 grid place-items-center text-[#C96A2B] shrink-0">
      {icon}
    </span>
    <div className="min-w-0">
      <div className="text-[11px] uppercase tracking-[0.2em] text-[#5C5C5C] mb-1">
        {label}
      </div>
      {href ? (
        <a
          href={href}
          data-testid={testid}
          className="font-display text-base md:text-lg text-[#2B2B2B] hover:text-[#C96A2B] transition-colors break-words"
        >
          {value}
        </a>
      ) : (
        <div
          className="font-display text-base md:text-lg text-[#2B2B2B] break-words"
          data-testid={testid}
        >
          {value}
        </div>
      )}
    </div>
  </div>
);
