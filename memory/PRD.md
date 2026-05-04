# Sri Sai Annapoorna Grand — Restaurant Website (PRD)

## Original problem statement
Premium marketing website for **SRI SAI ANNAPOORNA GRAND**, a budget-friendly South & North Indian restaurant in Hiriyur, Karnataka (₹1–200 per person, 4.1★).
Goal: agency-quality look, mobile-first, smooth motion, strong CTAs, trust building via reviews, highlight affordability.

## User personas
- Budget-conscious families dining out together
- Students looking for affordable, tasty meals
- Travellers passing through Hiriyur on highway routes
- Local residents who want a familiar, comfort-food spot

## Architecture
- **Frontend**: React 19 + Tailwind + shadcn/ui + framer-motion + lucide-react + sonner
- **Backend**: FastAPI + Motor (MongoDB async)
- **DB**: MongoDB collections — `reservations`, `contact_messages`
- **Routing**: Single-page (`/`) with anchor sections (#home, #about, #menu, #gallery, #reviews, #reservation, #location)

## Design system
- Palette: Saffron `#C96A2B`, Cream `#FFF6E9`, Dark Green `#2F5D50`, Charcoal `#2B2B2B`
- Typography: Playfair Display (headings) + Poppins (body)
- Surfaces: white cards on cream bg, `rounded-2xl/3xl`, soft shadows, glass nav

## Implemented (Iteration 1 — Dec 2025)
- ✅ Sticky glassy navbar with mobile drawer
- ✅ Hero with overlapping food cards + floating "Today's Special" badge + stats row
- ✅ Marquee strip of restaurant highlights
- ✅ About section with story copy, italic pull-quote, feature pills
- ✅ Bento Menu (4 categories) with active-panel item list & prices
- ✅ Why Choose Us — 6 icon features with hover circles
- ✅ Reviews carousel (auto-advance + dots + prev/next)
- ✅ Gallery bento grid (8 images, asymmetric layout)
- ✅ Reservation form (saves to MongoDB) — success state + sonner toasts
- ✅ Location section — map embed + address/phone/email/hours + Get Directions CTA
- ✅ Final CTA "Hungry? Visit Us Today!" + dark green footer
- ✅ Backend endpoints: GET `/api/`, POST/GET `/api/reservations`, POST/GET `/api/contact`
- ✅ Pydantic validation (guests 1-20, email format, length limits)
- ✅ Testing agent: 100% backend + 100% frontend pass

## Backlog (Prioritised)

### P1 — High impact
- Wire up a public **Contact / Feedback form** UI section (backend endpoint already exists)
- Online **menu PDF download** + Zomato/Swiggy delivery deep-links
- WhatsApp click-to-chat floating button (very effective for Indian local restaurants)

### P2 — Medium
- Multi-language toggle (Kannada / Hindi / English) for local accessibility
- Daily-special banner managed via a tiny admin route
- Real Google Reviews integration via Places API
- SEO: structured data (LocalBusiness schema), sitemap, OG images

### P3 — Nice to have
- Loyalty / referral coupon flow ("share & save 10%")
- Birthday/anniversary auto-offer email via Resend
- Photo upload from diners (UGC moderated)

## Next action items
- Replace placeholder phone `+91 98XXX 12345` and exact address with real ones
- Add the Contact/Feedback section UI on the homepage
- Hook up real Google Reviews (Places API) once business has a verified profile
