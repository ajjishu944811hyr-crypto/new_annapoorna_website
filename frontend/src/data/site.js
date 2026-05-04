export const RESTAURANT = {
  name: "Sri Sai Annapoorna Grand",
  shortName: "Annapoorna Grand",
  tagline: "Comfort food that feels like home",
  phone: "+91 95908 26668",
  phoneRaw: "+919590826668",
  email: "pttejaswi@gmail.com",
  address:
    "Huliyar Rd, near Rastriya Academy School, behind RPC Mill, Hiriyur, Karnataka 577598",
  mapsLink: "https://maps.app.goo.gl/psu55hcBk5fWgdky9",
  hours: [
    { day: "Mon – Sun", time: "7:00 AM — 10:30 PM" },
    { day: "Breakfast", time: "7:00 AM — 11:00 AM" },
    { day: "Lunch & Dinner", time: "11:30 AM — 10:30 PM" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Sri+Sai+Annapoorna+Grand,+Huliyar+Rd,+Hiriyur,+Karnataka+577598&output=embed",
  rating: 4.1,
  reviewsCount: 612,
  established: 2009,
  rebrandYear: 2024,
  formerName: "Annapoorna Hotel",
  signatureDish: "Holige",
  signatureSubtitle: "Bele · Kayi · Bili — three traditional varieties",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home", testid: "nav-home" },
  { label: "Story", href: "#about", testid: "nav-about" },
  { label: "Menu", href: "#menu", testid: "nav-menu" },
  { label: "Events", href: "#events", testid: "nav-events" },
  { label: "Gallery", href: "#gallery", testid: "nav-gallery" },
  { label: "Reviews", href: "#reviews", testid: "nav-reviews" },
  { label: "Contact", href: "#contact", testid: "nav-contact" },
];

export const IMAGES = {
  heroDosa:
    "https://images.unsplash.com/photo-1743517894265-c86ab035adef?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400",
  thali:
    "https://images.unsplash.com/photo-1711153419402-336ee48f2138?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  assorted:
    "https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  interior:
    "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/svl28k6w_WhatsApp%20Image%202026-05-02%20at%2013.26.32.jpeg",
  entrance:
    "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/eropokmx_WhatsApp%20Image%202026-05-02%20at%2013.26.33.jpeg",
  walkway:
    "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/n0iuo4o6_WhatsApp%20Image%202026-05-02%20at%2013.26.33%20%281%29.jpeg",
  // premium restaurant bg for hero
  heroBg:
    "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/svl28k6w_WhatsApp%20Image%202026-05-02%20at%2013.26.32.jpeg",
  // Additional curated food imagery
  idli:
    "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  paneer:
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  curry:
    "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  vada:
    "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  chai:
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  spices:
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
};

// Party / Convention Hall imagery — real photos from Sri Sai Convention Hall
export const PARTY_IMAGES = [
  {
    src: "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/5myx26w5_WhatsApp%20Image%202026-05-02%20at%2013.23.36.jpeg",
    label: "Engagement Stage",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/knyv5lg1_WhatsApp%20Image%202026-05-02%20at%2013.23.16.jpeg",
    label: "Convention Hall",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/7kq15qbi_WhatsApp%20Image%202026-05-02%20at%2013.23.16%20%281%29.jpeg",
    label: "Birthday Parties",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/23da05tu_WhatsApp%20Image%202026-05-02%20at%2013.23.17.jpeg",
    label: "Naming Ceremony",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_budget-feast-5/artifacts/qsq59p5k_WhatsApp%20Image%202026-05-02%20at%2013.23.37.jpeg",
    label: "Anniversary & More",
  },
];

export const CATERING_FEATURES = [
  {
    title: "All Event Types",
    body: "Weddings, receptions, birthdays, naming ceremonies, corporate gatherings — we cater every occasion big or small.",
  },
  {
    title: "Custom Menus",
    body: "Pure-veg South & North Indian spreads, jain options, kids' menu — design the menu that suits your guests.",
  },
  {
    title: "On-Site Service",
    body: "Trained service staff, live counters, and hot-served buffets at your venue or our convention hall.",
  },
  {
    title: "Transparent Pricing",
    body: "Clear per-plate quotes, zero hidden charges. Special tariffs for families and large gatherings.",
  },
];

export const MENU_CATEGORIES = [
  {
    id: "breakfast",
    title: "Breakfast Specials",
    blurb: "Start your morning with comforting tiffin classics.",
    image: IMAGES.idli,
    items: [
      { name: "Butter Masala Dosa", price: "₹95", note: "Signature" },
      { name: "Khara Bath", price: "₹55", note: "Local favourite" },
      { name: "Idli Vada Combo", price: "₹70" },
      { name: "Set Dosa", price: "₹65" },
    ],
  },
  {
    id: "south-indian",
    title: "South Indian Mains",
    blurb: "Banana-leaf style meals with sambhar, rasam & curd.",
    image: IMAGES.thali,
    items: [
      { name: "Holige — Bele · Kayi · Bili", price: "₹40", note: "Our signature · 3 varieties" },
      { name: "South Indian Thali", price: "₹150" },
      { name: "Bisi Bele Bath", price: "₹110" },
      { name: "Lemon Rice", price: "₹85" },
      { name: "Curd Rice", price: "₹70" },
    ],
  },
  {
    id: "north-indian",
    title: "North Indian Meals",
    blurb: "Hearty curries with fluffy chapati & basmati rice.",
    image: IMAGES.paneer,
    items: [
      { name: "Paneer Butter Masala", price: "₹160" },
      { name: "North Indian Thali", price: "₹180" },
      { name: "Dal Tadka", price: "₹120" },
      { name: "Veg Biryani", price: "₹140" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Chai",
    blurb: "Quick bites and steaming masala chai for the in‑between hours.",
    image: IMAGES.chai,
    items: [
      { name: "Mirchi Bajji", price: "₹35" },
      { name: "Onion Pakoda", price: "₹40" },
      { name: "Masala Chai", price: "₹20" },
      { name: "Filter Coffee", price: "₹30" },
    ],
  },
];

export const REVIEWS = [
  {
    name: "Lakshmi N.",
    place: "Bengaluru",
    rating: 5,
    text:
      "Stopped over on the way to Hampi. The butter masala dosa is genuinely the best I’ve had outside Mysore. Generous portions and very kind staff at the counter.",
  },
  {
    name: "Arun Patil",
    place: "Hubli",
    rating: 4,
    text:
      "Great taste at unbeatable prices. The North Indian thali fed two of us comfortably for under ₹350. Will visit again whenever I’m crossing Hiriyur.",
  },
  {
    name: "Meera Iyer",
    place: "Chitradurga",
    rating: 5,
    text:
      "Brought my parents on Sunday — clean, warm and homely. Khara bath tasted exactly like my ajji used to make. Loved the filter coffee finish.",
  },
  {
    name: "Sandeep R.",
    place: "Davangere",
    rating: 4,
    text:
      "Solid neighbourhood spot. Service was a touch slow during the rush but the food more than made up for it. Paneer butter masala — chef’s kiss.",
  },
  {
    name: "Priya & Family",
    place: "Tumkur",
    rating: 5,
    text:
      "Family-friendly and extremely affordable. Kids loved the set dosa and we loved the thali. The cream-and-saffron interiors feel calm and welcoming.",
  },
];

export const WHY_US = [
  {
    icon: "Utensils",
    title: "Fresh & Tasty",
    body: "Every dosa, curry and chai is prepared to order — no shortcuts, just home-style cooking.",
  },
  {
    icon: "Wallet",
    title: "Budget-Friendly",
    body: "Most plates priced ₹20–200. Wholesome meals that respect your wallet, every single visit.",
  },
  {
    icon: "Users",
    title: "Family-Friendly",
    body: "Spacious seating, kid-safe menu and a calm atmosphere built for unhurried family meals.",
  },
  {
    icon: "Sparkles",
    title: "Comfortable Ambience",
    body: "Warm lighting, clean tables and that unmistakable aroma of freshly tempered curry leaves.",
  },
  {
    icon: "MapPin",
    title: "Easy to Find",
    body: "On the main Hiriyur road — a perfect halt whether you’re a local or just passing through.",
  },
  {
    icon: "Heart",
    title: "Made With Care",
    body: "We’re committed to improving service every visit. Your feedback shapes what we serve next.",
  },
];

export const GALLERY_IMAGES = [
  IMAGES.entrance,
  IMAGES.thali,
  IMAGES.interior,
  IMAGES.heroDosa,
  IMAGES.walkway,
  IMAGES.assorted,
  IMAGES.paneer,
  IMAGES.idli,
];
