const express = require("express");
const router = express.Router();
const pool = require("../config/db"); // Database connection
const authenticate = require("../middleware/auth"); // Authentication middleware

// ✅ 1. User Dashboard API
router.get("/dashboard", authenticate, async (req, res) => {
    try {
        const userId = req.user.id;

        // ✅ Fetch user details
        const [userResults] = await pool.query(
            `SELECT id, name, email, referral_code, referred_by FROM users WHERE id = ?`,
            [userId]
        );

        if (userResults.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = userResults[0];

        // ✅ Fetch direct referrals
        const [referralResults] = await pool.query(
            `SELECT id, name, email, referral_code 
             FROM users 
             WHERE referred_by = ?`, 
            [user.referral_code]
        );

        console.log("✅ Backend API - Direct Referrals:", referralResults);

        res.json({
            user: user,
            direct_referrals: referralResults || [] // Ensure empty array if no referrals
        });

    } catch (error) {
        console.error("❌ Error in Dashboard API:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ✅ 2. Referral Tracking API (Multi-Level)
router.get("/referral-tree", authenticate, async (req, res) => {
    try {
        const userId = req.user.id;

        // ✅ Step 1: Get the logged-in user's details
        const [userResult] = await pool.query(
            `SELECT id, name, email, referral_code, referred_by FROM users WHERE id = ?`,
            [userId]
        );

        if (userResult.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = userResult[0];

        // ✅ Step 2: Get the full referral tree (all people referred by the logged-in user)
        const referralTreeQuery = `
            WITH RECURSIVE referral_tree AS (
                -- Start with the logged-in user
                SELECT id, name, email, referral_code, referred_by FROM users WHERE id = ?
                UNION ALL
                -- Get all users referred by anyone in referral_tree
                SELECT u.id, u.name, u.email, u.referral_code, u.referred_by
                FROM users u
                INNER JOIN referral_tree rt ON u.referred_by = rt.referral_code
            )
            SELECT * FROM referral_tree;
        `;

        const [referralTreeResults] = await pool.query(referralTreeQuery, [userId]);

        // ✅ Step 3: Get the referrer (who referred the logged-in user)
        let referrer = null;
        if (user.referred_by) {
            const [referrerResult] = await pool.query(
                `SELECT id, name, email, referral_code, referred_by FROM users WHERE referral_code = ?`,
                [user.referred_by]
            );

            if (referrerResult.length > 0) {
                referrer = referrerResult[0]; // Store the referrer
            }
        }

        // ✅ Step 4: Ensure the logged-in user is included in the tree
        let fullReferralTree = referralTreeResults || [];

        if (!fullReferralTree.some(node => node.id === user.id)) {
            fullReferralTree.unshift(user); // Ensure logged-in user is included
        }

        if (referrer) {
            fullReferralTree.unshift(referrer); // Add referrer at the top
        }

        console.log("✅ Full Referral Tree Data:", fullReferralTree);

        res.json({ referral_tree: fullReferralTree });
    } catch (error) {
        console.error("❌ Error fetching referral tree:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
