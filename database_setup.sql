CREATE DATABASE ReferralSystem;
USE ReferralSystem;

-- Users Table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    father_name VARCHAR(100),
    address TEXT,
    mobile_number VARCHAR(15) UNIQUE NOT NULL,
    whatsapp_number VARCHAR(15),
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    referral_code VARCHAR(10) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Referrals Table
CREATE TABLE Referrals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    referred_by INT,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (referred_by) REFERENCES Users(id) ON DELETE SET NULL
);

-- Index for fast lookup on referral_code
CREATE INDEX idx_referral_code ON Users(referral_code);
