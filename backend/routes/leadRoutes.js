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

    // 2️⃣ Create Email Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3️⃣ Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // company email
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

    res.status(200).json({ message: "Lead submitted successfully" });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
