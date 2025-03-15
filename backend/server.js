const express = require('express');
const path = require("path");  // ✅ Add this line
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config({ path: "../.env" }); // Explicitly specify the path
console.log("✅ JWT_SECRET from .env:", process.env.JWT_SECRET);


const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// ✅ Serve dashboard.html properly
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dashboard.html"));
});

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

// Home Route
app.get('/', (req, res) => {
    res.send('Referral System API is running...');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);  // ✅ Fixed by adding backticks (` `)
});
