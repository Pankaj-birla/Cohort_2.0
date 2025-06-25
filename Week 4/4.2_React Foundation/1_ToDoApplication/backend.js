const express = require("express");
const cords = require("cords");

const app = express();
app.use(cords());


app.get("/todo", (req,res) => {
    const input1 = req.headers.a;
    const input2 = req.headers.b;

    
})