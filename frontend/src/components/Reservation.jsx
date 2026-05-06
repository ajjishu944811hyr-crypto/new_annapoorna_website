import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Phone, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";

export const Reservation = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:30",
    guests: 2,
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, phone, email, date, time, guests, notes } = form;

    const message = `New Reservation:\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nNotes: ${notes}`;

    // ✅ Open WhatsApp IMMEDIATELY (must be synchronous / direct user gesture)
    // so browsers don't block the popup
    const whatsappURL = `https://wa.me/919590826668?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // Save to MongoDB in the background (non-blocking)
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        console.error("DB save failed:", result.message);
      }
      setDone(true);
    } catch (err) {
      console.error("Reservation DB error:", err);
      alert("Sorry, we couldn't save your reservation. Please call us at +91 95908 26668.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="reservation"
      data-testid="reservation-section"
      className="py-24 md:py-32 bg-[#FFF6E9]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="bg-white rounded-[2rem] border border-[#EADECF] shadow-[0_30px_80px_rgba(43,43,43,0.08)] overflow-hidden grid lg:grid-cols-2">
          {/* Left visual */}
          <div className="relative bg-[#2F5D50] text-[#FFF6E9] p-10 md:p-14 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#FFF6E9]/70 mb-5">
                ✦ Reserve a Table
              </div>
              <h2 className="font-display text-[36px] md:text-[44px] leading-[1.05] tracking-tight">
                A warm seat,{" "}
                <span className="italic text-[#FFF6E9]">waiting for you.</span>
              </h2>
              <p className="mt-5 text-[#FFF6E9]/80 leading-relaxed max-w-md">
                Skip the wait — let us know when you’re coming. We’ll have your
                table set with fresh water, hot sambhar, and a smile.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["Open Daily", "7 AM – 10:30 PM"],
                ["Avg. wait", "Under 8 mins"],
                ["Family seating", "Up to 20 guests"],
                ["Quick call", "+91 95908 26668"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#FFF6E9]/60">
                    {k}
                  </div>
                  <div className="font-display text-base mt-1">{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="p-8 md:p-12"
            data-testid="reservation-form"
          >
            {done ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-10"
                data-testid="reservation-success"
              >
                <div className="h-16 w-16 mx-auto rounded-full bg-[#2F5D50]/10 grid place-items-center mb-5">
                  <CheckCircle2 className="text-[#2F5D50]" size={28} />
                </div>
                <h3 className="font-display text-2xl text-[#2B2B2B]">
                  Request received!
                </h3>
                <p className="text-[#5C5C5C] mt-2 max-w-sm mx-auto">
                  We’ve noted your booking and will give you a quick call to
                  confirm. See you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  data-testid="reservation-reset"
                  className="mt-6 text-sm text-[#C96A2B] underline underline-offset-4"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-display text-2xl md:text-3xl text-[#2B2B2B] mb-2">
                  Tell us a little about your visit
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field
                    icon={<User size={16} />}
                    label="Full name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    testid="form-name"
                    required
                  />
                  <Field
                    icon={<Phone size={16} />}
                    label="Phone"
                    placeholder="+91"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    testid="form-phone"
                    required
                  />
                </div>

                <Field
                  icon={<Mail size={16} />}
                  label="Email (optional)"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  testid="form-email"
                />

                <div className="grid sm:grid-cols-3 gap-4">
                  <Field
                    icon={<Calendar size={16} />}
                    label="Date"
                    type="date"
                    value={form.date}
                    onChange={(v) => update("date", v)}
                    testid="form-date"
                    required
                  />
                  <Field
                    icon={<Clock size={16} />}
                    label="Time"
                    type="time"
                    value={form.time}
                    onChange={(v) => update("time", v)}
                    testid="form-time"
                    required
                  />
                  <Field
                    icon={<Users size={16} />}
                    label="Guests"
                    type="number"
                    min={1}
                    max={20}
                    value={form.guests}
                    onChange={(v) => update("guests", v)}
                    testid="form-guests"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] font-medium flex items-center gap-2 mb-2">
                    <MessageSquare size={14} /> Notes (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, high chair, special occasion…"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    data-testid="form-notes"
                    className="w-full bg-[#FFF6E9] border border-[#EADECF] rounded-2xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#C96A2B] focus:ring-2 focus:ring-[#C96A2B]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="reservation-submit"
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Confirm Reservation"}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ icon, label, testid, onChange, value, ...rest }) => (
  <div>
    <label className="text-xs uppercase tracking-[0.18em] text-[#5C5C5C] font-medium flex items-center gap-2 mb-2">
      {icon}
      {label}
    </label>
    <input
      {...rest}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-testid={testid}
      className="w-full bg-[#FFF6E9] border border-[#EADECF] rounded-2xl px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#C96A2B] focus:ring-2 focus:ring-[#C96A2B]/20"
    />
  </div>
);
