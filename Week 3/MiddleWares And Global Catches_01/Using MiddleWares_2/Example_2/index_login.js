const express = require("express");

const zod = require("zod");

const app = express();
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(5)
});

app.post("/login", (req,res) => {
    const body = req.body

    const result = schema.safeParse(body);

    if(!result.success){
       return res.json({
            msg: "Invalid Inputs"
        })
    }
    res.json({
        msg : "Successfully login.."
    })
});

app.listen(3000)