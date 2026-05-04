export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log("Booking received:", data);

      return res.status(200).json({
        success: true,
        message: "Reservation received"
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server error"
      });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
