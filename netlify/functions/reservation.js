const mongoose = require("mongoose");

// Reuse DB connection across warm function invocations
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not set");
  }

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB connected successfully");
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

// Prevent model re-compilation on warm invocations
const Reservation =
  mongoose.models.Reservation ||
  mongoose.model("Reservation", reservationSchema);

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: "Method not allowed" }),
    };
  }

  try {
    await connectDB();

    const body = JSON.parse(event.body || "{}");
    const { name, phone, email, date, time, guests, notes } = body;

    if (!name || !phone || !date || !time) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Missing required fields: name, phone, date, time",
        }),
      };
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
    console.log("Reservation saved:", reservation._id);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Reservation saved successfully",
        id: reservation._id,
      }),
    };
  } catch (err) {
    console.error("Reservation save error:", err.message);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Failed to save reservation",
        error: err.message,
      }),
    };
  }
};
