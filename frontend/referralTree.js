async function fetchReferralTree() {
    const token = localStorage.getItem("token");
    let loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        console.error("❌ No logged-in user found in localStorage. Redirecting to login...");
        window.location.href = "login.html";  
        return;
    }

    loggedInUser = parseInt(loggedInUser);
    console.log("✅ Logged-in user ID:", loggedInUser);

    try {
        const response = await fetch("http://localhost:5000/api/user/referral-tree", {
            headers: { "Authorization": `Bearer ${token}` }
        });

        const result = await response.json();
        console.log("API Response (Raw):", JSON.stringify(result, null, 2));

        if (response.ok && result.referral_tree) {
            let transformedTree = buildReferralTree(result.referral_tree, loggedInUser);
            console.log("🌲 Transformed Tree Data:", transformedTree);

            if (transformedTree) {
                drawReferralTree(transformedTree, loggedInUser);
            } else {
                console.error("❌ Error: Referral tree transformation failed.");
            }
        } else {
            console.error("❌ Invalid Tree Data:", result);
            alert(result.error || "Invalid referral tree data received.");
        }
    } catch (error) {
        console.error("❌ Error fetching referral tree:", error);
    }
}

function buildReferralTree(referralData, loggedInUser) {
    console.log("🔍 Referral Data Received:", referralData);

    // ✅ Step 1: Create a map of all users by referral code
    let referralMap = {};
    referralData.forEach(user => {
        referralMap[user.referral_code] = { ...user, children: [] };
    });

    console.log("🗺️ Referral Map Created:", referralMap);

    // ✅ Step 2: Link children to their parents
    let root = null;
    referralData.forEach(user => {
        if (user.referred_by) {
            let parent = referralMap[user.referred_by];
            if (parent) {
                parent.children.push(referralMap[user.referral_code]);
            }
        } else {
            root = referralMap[user.referral_code];  // Root user (top-level)
        }
    });

    console.log("🌳 Complete Referral Tree:", root);

    // ✅ Step 3: Find the ultimate ancestor of the logged-in user
    let userNode = referralMap[Object.values(referralMap).find(u => u.id === loggedInUser)?.referral_code];
    if (!userNode) {
        console.error(`❌ Error: Logged-in user (ID: ${loggedInUser}) not found in referral data.`);
        return null;
    }

    console.log("✅ Logged-in user found:", userNode);

    // ✅ Step 4: If the user is not at the top, find their highest ancestor
    let ancestor = userNode;
    while (ancestor.referred_by && referralMap[ancestor.referred_by]) {
        ancestor = referralMap[ancestor.referred_by];
    }

    console.log("👑 Ultimate Ancestor:", ancestor);

    return ancestor; // Return the highest ancestor, ensuring the full tree is built
}


function drawReferralTree(treeData, loggedInUser) {
    if (!treeData || typeof treeData !== "object") {
        console.error("❌ Tree data is not in the expected format:", treeData);
        return;
    }

    const width = 800, height = 500;

    // Remove existing SVG before appending a new one
    d3.select("#referralTree").select("svg").remove();

    const svg = d3.select("#referralTree").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(50, 50)");

    const root = d3.hierarchy(treeData);
    const treeLayout = d3.tree().size([width - 100, height - 100]);
    treeLayout(root);

    // Draw Links
    svg.selectAll("line")
        .data(root.links())
        .enter().append("line")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y)
        .style("stroke", "black");

    // Draw Nodes (Highlight logged-in user)
    svg.selectAll("circle")
        .data(root.descendants().filter(d => d.data.id !== loggedInUser))
        .enter().append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 10)
        .style("fill", "blue");

    // Highlight logged-in user with a box
    svg.selectAll("rect")
        .data(root.descendants().filter(d => d.data.id === loggedInUser))
        .enter().append("rect")
        .attr("x", d => d.x - 10)
        .attr("y", d => d.y - 10)
        .attr("width", 20)
        .attr("height", 20)
        .style("fill", "red");

    // Add Text Labels
    svg.selectAll("text")
        .data(root.descendants())
        .enter().append("text")
        .attr("x", d => d.x + 15)
        .attr("y", d => d.y)
        .text(d => d.data.name)
        .style("font-size", "12px")
        .style("fill", "black");
}

// Fetch referral tree on page load
fetchReferralTree();
