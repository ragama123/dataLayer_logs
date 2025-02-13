const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to log dataLayer events
app.post("/logData", (req, res) => {
    try {
        const dataLayer = req.body;
        console.log("Received DataLayer Event:", dataLayer);
        
        res.status(200).json({ message: "Data received successfully", data: dataLayer });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
