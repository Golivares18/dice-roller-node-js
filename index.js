const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS to allow requests from your static site
const corsOptions = {
    origin: "https://polite-ocean-081526910.6.azurestaticapps.net/", // Replace with your actual static site URL
    methods: "GET",
};

app.use(cors(corsOptions));

// Serve a blank page for the root
app.get("/", (req, res) => {
    res.send("<html><body></body></html>"); // Blank page
});

// Wake-up API (keeps the server active)
app.get("/wake-up", (req, res) => {
    console.log("Server wake-up request received");
    res.json({ message: "Server is awake!" });
});

// Dice roll API - Generates a random number between 1-6
app.get("/roll-dice", (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: roll });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
