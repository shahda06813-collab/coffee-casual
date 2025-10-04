// Backend بسيط بـ Node.js + Express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// استقبال بيانات الفورم
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 رسالة جديدة:", { name, email, message });
  res.json({ success: true, msg : "Coffee Casual Cafe Received Your Message , We Will Contact You Soon" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
