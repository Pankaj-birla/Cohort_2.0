const express = require("express");
const app = express();

app.get("/health-checkup", (req, res) => {
    // Extracting from query parameters
    // Convert to number if needed
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = parseInt(req.query.kidneyId, 10); 

    if (!(username === "pankaj" && password === "pass")) {
        return res.status(403).json({
            msg: "User Doesn't exist"
        });
    }

    if (!(kidneyId === 1 || kidneyId === 2)) {
        return res.status(411).json({
            msg: "Wrong Inputs"
        });
    }

    return res.json({
        msg: "Your Kidney is fine!"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
