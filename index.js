const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 4000;


// Enable CORS
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Dice roll 
app.get("/roll-dice", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});




