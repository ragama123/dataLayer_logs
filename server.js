const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Temporary storage for logs
let logs = [];

// ✅ Endpoint to log data (POST)
app.post("/logData", (req, res) => {
    try {
        const dataLayer = req.body;
        console.log("Received DataLayer Event:", dataLayer);

        logs.push(dataLayer); // Store logs in memory

        res.status(200).json({ message: "Data received successfully", data: dataLayer });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// ✅ **NEW** Endpoint to Fetch Logs (GET)
app.get("/logData", (req, res) => {
    res.status(200).json(logs);  // Return all stored logs
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
