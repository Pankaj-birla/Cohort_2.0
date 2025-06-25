const express = require("express");

const app = express();

function validAge(req,res,next){
    const age = parseInt(req.query.age);
    if(age >= 14){
        next();
    }else{
        res.json({
            msg : "You age is low for the ride"
        })
    }
}

app.use(validAge);

app.get("/ride1", (req,res) => {
    res.json({
        msg : "Ride1 ride successfull"
    })
})

app.get("/ride2",(req,res) => {
    res.json({
        msg : "Ride2 ride successfull"
    })
})

app.listen(3000);