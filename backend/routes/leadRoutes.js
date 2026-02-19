const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const nodemailer = require("nodemailer");

// ✅ POST Route
router.post("/submit", async (req, res) => {
  try {
    const { name, email, phone, workingStatus, preferredTime } = req.body;

    // 1️⃣ Save in MongoDB
    const newLead = new Lead({
      name,
      email,
      phone,
      workingStatus,
      preferredTime,
    });

    await newLead.save();

  // ===== EMAIL TEMPORARILY DISABLED =====

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

try {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Course Lead 🚀",
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Working Status:</strong> ${workingStatus}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime}</p>
    `,
  });
  console.log("Email sent successfully");
} catch (mailError) {
  console.log("Email failed:", mailError.message);
}


    res.status(200).json({ message: "Lead submitted successfully" });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
