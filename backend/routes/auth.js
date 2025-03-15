const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // Ensure consistency
require("dotenv").config();
const router = express.Router();

// ✅ Generate Unique Referral Code Function
const generateReferralCode = async () => {
    let code;
    let isUnique = false;
    while (!isUnique) {
        code = Math.random().toString(36).substr(2, 8).toUpperCase(); // Example: A1B2C3D4
        const [existing] = await pool.query("SELECT referral_code FROM users WHERE referral_code = ?", [code]);
        if (existing.length === 0) {
            isUnique = true;
        }
    }
    return code;
};

// ✅ User Registration API
router.post("/register", async (req, res) => {
    const { name, father_name, address, mobile_number, whatsapp_number, email, password, referred_by } = req.body;

    if (!name || !mobile_number || !email || !password) {
        return res.status(400).json({ message: "All required fields must be filled!" });
    }

    try {
        // ✅ Check if email or mobile already exists
        const [existingUser] = await pool.query(
            "SELECT * FROM users WHERE email = ? OR mobile_number = ?",
            [email, mobile_number]
        );

        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email or Mobile number already in use" });
        }

        // ✅ Hash Password (No need for manual salt)
        const hashedPassword = await bcrypt.hash(password, 10);

        // ✅ Generate Unique Referral Code (Example: first 5 letters + random number)
        const userReferralCode = name.substring(0, 5).toLowerCase() + Math.floor(1000 + Math.random() * 9000);

        // ✅ Validate `referred_by` (Check if referral code exists)
        let referrer = null;
        if (referred_by) {
            const [referrerData] = await pool.query(
                "SELECT id, referral_code FROM users WHERE referral_code = ?",
                [referred_by]
            );

            if (referrerData.length === 0) {
                return res.status(400).json({ message: "❌ Invalid referral code." });
            }
            referrer = referrerData[0].referral_code; // ✅ Store correct referral code
        }

        // ✅ Insert into Database
        await pool.query(
            "INSERT INTO users (name, father_name, address, mobile_number, whatsapp_number, email, password_hash, referral_code, referred_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [name, father_name, address, mobile_number, whatsapp_number, email, hashedPassword, userReferralCode, referrer]
        );

        console.log("✅ User registered:", { name, email, referral_code: userReferralCode });
        res.status(201).json({ message: "✅ Registration successful", referral_code: userReferralCode });

    } catch (error) {
        console.error("❌ Registration Error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


// ✅ User Login API
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

        if (users.length === 0) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const user = users[0];

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password_hash); // Fixed field name
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generate JWT token
        const secretKey = process.env.JWT_SECRET || "fallback_secret"; // Ensure a valid secret
const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });


        res.json({ token, user });
    } catch (error) {
        console.error("❌ Error during login:", error);
        res.status(500).json({ error: "Internal server error", details: error.message });
    }
});

module.exports = router;
