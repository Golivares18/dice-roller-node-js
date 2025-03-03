const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from the static website
app.use(cors());

// Serve static files (like script.js) from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Dice roll API
app.get("/roll-dice", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

async function testAPI() {
    const serverUrl = window.location.origin; // Auto-detects server URL

    try {
        let response = await fetch(`${serverUrl}/roll-dice`);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        let data = await response.json();

        document.getElementById("api-result").textContent = `API Response: ${JSON.stringify(data)}`;
    } catch (error) {
        document.getElementById("api-result").textContent = "Error testing API.";
        console.error("API Test Error:", error);
    }
}
