export default function handler(req, res) {
  console.log("API HIT", req.method);

  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log("Received data:", data);

      return res.status(200).json({
        success: true,
        message: "Reservation received"
      });
    } catch (err) {
      console.error("Server error:", err);
      return res.status(500).json({
        success: false,
        message: "Server error"
      });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
