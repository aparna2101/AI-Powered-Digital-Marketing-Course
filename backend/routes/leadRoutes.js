const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const nodemailer = require("nodemailer");
const SibApiV3Sdk = require("sib-api-v3-sdk");


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

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_SMTP_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

await apiInstance.sendTransacEmail({
  sender: { email: "aparnachaurasia210103@gmail.com" },
  to: [{ email: "aparnachaurasia210103@gmail.com" }],
  subject: "New Course Lead 🚀",
  htmlContent: `
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
