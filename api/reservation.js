const mongoose = require("mongoose");

// Reuse connection across warm lambda invocations
let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

const reservationSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    date: String,
    time: String,
    guests: String,
    notes: String,
  },
  { timestamps: true }
);

// Avoid model recompilation in hot-reload / warm lambdas
const Reservation =
  mongoose.models.Reservation ||
  mongoose.model("Reservation", reservationSchema);

export default async function handler(req, res) {
  // Allow CORS from any origin (adjust if needed)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();

    const { name, phone, email, date, time, guests, notes } = req.body;

    if (!name || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, phone, date, time",
      });
    }

    const reservation = new Reservation({
      name,
      phone,
      email,
      date,
      time,
      guests,
      notes,
    });

    await reservation.save();

    return res.status(200).json({
      success: true,
      message: "Reservation saved successfully",
      id: reservation._id,
    });
  } catch (err) {
    console.error("Reservation save error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to save reservation",
      error: err.message,
    });
  }
}
