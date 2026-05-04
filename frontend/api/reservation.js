export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

  try {
    const data = req.body;
    
    // Log the reservation data
    console.log("=== NEW RESERVATION RECEIVED ===");
    console.log(`Name: ${data.name}`);
    console.log(`Phone: ${data.phone}`);
    console.log(`Email: ${data.email || 'N/A'}`);
    console.log(`Date: ${data.date}`);
    console.log(`Time: ${data.time}`);
    console.log(`Guests: ${data.guests}`);
    console.log(`Notes: ${data.notes || 'N/A'}`);
    console.log("================================");

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: "Reservation received" 
    });
  } catch (error) {
    console.error("Error processing reservation:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
}
