const { createTodo, updateTodo } = require("./types"); // or import { createTodo, updateTodo } from "./types";
const { todo } = require( "./db")
const cors = require("cors")
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors())

// Route for creating the todos
app.post('/todo', async (req, res) => {
    const createPayload = req.body;

    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }

    //put it into the db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })

});

// Route for getting the todos
app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.json({
        Todos: todos
    })
});

// Route for make the todos as done
app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "you send the wrong inputs"
        })
    }

    // or todo.updateById( id , {})
    const todos = await todo.updateOne({
        _id: updatePayload.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000);