const z = require("zod"); // or import { z } from "zod";

const createTodo = z.object({
    title: z.string(),
    description: z.string()
})

const updateTodo = z.object({
    id: z.string()
})  

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}