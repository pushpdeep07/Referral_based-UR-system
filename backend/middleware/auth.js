const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // ✅ Ensure Authorization header exists and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        console.error("❌ Missing or invalid Authorization header:", authHeader);
        return res.status(401).json({ error: "Access Denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract token
    console.log("✅ Extracted Token:", token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Decoded Token:", decoded);
        req.user = decoded; // Attach user info to request object
        next(); // Proceed to the next middleware
    } catch (error) {
        console.error("❌ JWT Verification Error:", error.message);

        if (error.name === "TokenExpiredError") {
            return res.status(403).json({ error: "Session expired. Please log in again." });
        } else {
            return res.status(401).json({ error: "Invalid token. Access denied." });
        }
    }
};
