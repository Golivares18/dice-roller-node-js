const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for the dice API but not for CORS failure testing
const corsOptions = {
    origin: "https://polite-ocean-081526910.6.azurestaticapps.net/", // Replace with your real client URL
    methods: "GET",
};

// Allow CORS only for specific routes
app.use("/roll-dice", cors(corsOptions));
app.use(express.static("public")); // Serve the test HTML file

// Root route (Serves a blank test page)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Wake-up API
app.get("/wake-up", (req, res) => {
    console.log("Wake-up request received.");
    res.json({ message: "Server is awake!" });
});

// Dice Roll API - Generates a random number (1-6)
app.get("/roll-dice", (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: roll });
});

// CORS failure demonstration - No CORS headers
app.get("/cors-failure", (req, res) => {
    res.status(403).json({ error: "CORS error simulated" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
