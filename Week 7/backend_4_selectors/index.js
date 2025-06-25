const express = require("express");
const cors = require("cors");
const TODOS = require("./todos")

const app = express();

app.use(cors())


app.get("/todo", (req, res) => {
    const id = parseInt(req.query.id);
    const todo = TODOS.find(x => x.id == id);

    return res.json({
        todo
    })
})

app.listen(3000)