const express  =  require("express")
const port = 3000
const app = express();

app.get('',function(req,res){
    res.send("Hello World!");
})

/*
    app.post('/backend-api/conversation', function(req,res){
        machinr learning code 
        res.send('Hi from chat gpt');
    })
*/
app.listen(port)
