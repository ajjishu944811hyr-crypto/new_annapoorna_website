require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const reservationSchema = new mongoose.Schema({
name: String,
phone: String,
email: String,
date: String,
time: String,
guests: String,
notes: String,
}, { timestamps: true });

const Reservation = mongoose.model("Reservation", reservationSchema);

app.post("/reservation", async (req, res) => {
try {
const newReservation = new Reservation(req.body);
await newReservation.save();
res.status(200).json({ success: true, message: "Reservation saved" });
} catch (error) {
res.status(500).json({ success: false, message: "Error saving reservation" });
}
});

app.get("/", (req, res) => {
res.send("Backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
