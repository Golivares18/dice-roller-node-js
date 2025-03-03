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
    const diceRoll = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
    res.json({ result: diceRoll });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
