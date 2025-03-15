const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "", // Empty if no password is set
    database: "referral_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test the database connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database connection failed:", err);
    } else {
        console.log("✅ Connected to MySQL database");
        connection.release(); // Release the connection back to the pool
    }
});

module.exports = pool.promise();
