document.getElementById("registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from refreshing

    const userData = {
        name: document.getElementById("name").value,
        father_name: document.getElementById("father_name").value,
        address: document.getElementById("address").value,
        mobile_number: document.getElementById("mobile_number").value,
        whatsapp_number: document.getElementById("whatsapp_number").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        referred_by: document.getElementById("referral_code").value.trim() || null // ✅ Ensure null if empty
    };

    console.log("🚀 Sending Registration Data:", userData); // Debugging log

    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        console.log("✅ Server Response:", result);

        if (response.ok) {
            // ✅ Check if successMessage exists before updating it
            const successMessage = document.getElementById("successMessage");
            const referralCodeSpan = document.getElementById("userReferralCode");

            if (successMessage && referralCodeSpan) {
                successMessage.style.display = "block";
                referralCodeSpan.innerText = `Your Referral Code: ${result.referral_code}`;
            } else {
                console.error("❌ Error: successMessage or userReferralCode element is missing in HTML");
            }

            document.getElementById("registrationForm").reset(); // ✅ Clear the form
        } else {
            alert(result.error || "❌ Registration failed");
        }
    } catch (error) {
        console.error("❌ Error:", error);
        alert("Something went wrong! Please try again.");
    }
});

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent page refresh

    const loginData = {
        email: document.getElementById("loginEmail").value.trim(),
        password: document.getElementById("loginPassword").value.trim()
    };

    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        });

        console.log("📩 Received Response:", response); // ✅ Log response object
        
        const result = await response.json();
        console.log("✅ Server Response Data:", result);

        if (response.ok) {  
            // ✅ Ensure token and user ID exist in response
            if (result.token && result.user && result.user.id) {
                localStorage.setItem("token", result.token);
                localStorage.setItem("loggedInUser", result.user.id.toString());

                console.log("✅ Stored User ID:", result.user.id);
                alert("Login successful! Redirecting to dashboard...");
                window.location.href = "dashboard.html"; // ✅ Redirect user to dashboard
            } else {
                console.error("❌ Error: Missing token or user ID in response");
                alert("Something went wrong. Please try again.");
            }
        } else {
            console.error("❌ Login Failed:", result.message);
            alert(result.message || "❌ Login failed! Invalid credentials.");
        }
    } catch (error) {
        console.error("❌ Error:", error);
        alert("Something went wrong. Please try again.");
    }
});
