document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    } else {
        console.error("❌ 'logoutButton' not found in HTML.");
    }

    fetchUserData();
});

async function fetchUserData() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("⚠️ You need to log in first!");
        window.location.href = "index.html";
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/user/dashboard", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`❌ Failed to fetch user data. Status: ${response.status}`);
        }

        const result = await response.json();

        console.log("✅ Dashboard API Response:", result);

        // Debugging log to check if referrals exist
        if (!result.direct_referrals || result.direct_referrals.length === 0) {
            console.warn("⚠️ No direct referrals found in API response!");
        } else {
            console.log("✅ Direct Referrals Data:", result.direct_referrals);
        }

        updateUserInfo(result);
    } catch (error) {
        console.error("❌ Fetch Error:", error);
        alert("⚠️ Error loading user data.");
    }
}

// ✅ Function to update user information in the UI
function updateUserInfo(result) {
    if (!result || !result.user) {
        console.error("❌ Invalid API response: Missing 'user' data.");
        return;
    }

    const userNameElement = document.getElementById("userName");
    const userReferralCodeElement = document.getElementById("userReferralCode");
    const referralLinkElement = document.getElementById("referralLink");
    const referralsList = document.getElementById("referralsList");

    if (userNameElement) userNameElement.innerText = result.user.name || "User";
    if (userReferralCodeElement) userReferralCodeElement.innerText = result.user.referral_code || "N/A";

    if (referralLinkElement) {
        referralLinkElement.href = `http://localhost:5000/register?ref=${result.user.referral_code}`;
        referralLinkElement.innerText = `http://localhost:5000/register?ref=${result.user.referral_code}`;
    }

    if (referralsList) {
        referralsList.innerHTML = "";  // Clear previous entries

        console.log("✅ Direct Referrals Data:", result.direct_referrals); // Debugging log
        
        if (result.direct_referrals && result.direct_referrals.length > 0) {
            result.direct_referrals.forEach(ref => {
                const li = document.createElement("li");
                li.textContent = `${ref.name} (${ref.referral_code})`;
                referralsList.appendChild(li);  // ✅ No extra indentation
            });
        } else {
            referralsList.innerHTML = "<p>⚠️ No direct referrals yet.</p>";
        }
                    
    }
}

// ✅ Logout Function
function logout() {
    localStorage.removeItem("token"); // Remove token
    window.location.href = "index.html"; // Redirect to login page
}
