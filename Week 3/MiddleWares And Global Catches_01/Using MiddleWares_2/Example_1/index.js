const express = require("express")
const app = express();

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(!(username == "pankaj" && password == "pass")){
        res.status(403).json({
            msg : "Credentials Wrong"
        });
    }
        next();
  
}

function kidneyMiddleware(req,res,next){
    const kidneyId = parseInt(req.query.kidneyId,10);
    
    if(!(kidneyId == 1 || kidneyId == 2)){
        res.status(403).json({
            msg : "Wrong Inputs"
        });
    }
        next();
    
}

app.get("/health-checkup",userMiddleware,kidneyMiddleware,(req,res) => { 
    res.json({
        msg: "Your health is Fine!"
    });
})

app.get("/kidney-check",userMiddleware,kidneyMiddleware,(req,res) =>{
    res.json({
        msg: "Your Kidney is Fine!"
    });
})


app.get("/heart-check",userMiddleware,(req,res) =>{
    res.json({
        msg: "Your Heart is Fine!"
    });
})

app.listen(3000);