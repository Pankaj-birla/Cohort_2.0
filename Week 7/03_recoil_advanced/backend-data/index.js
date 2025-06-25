const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());

app.get("/notificationsCount", (req, res) => {
    const allNotifications = {
        network: 4,
        jobs: 0,
        notifications: 12,
        messages: 0
    }
    res.json({
        allNotifications
    })
})

app.listen(3000);