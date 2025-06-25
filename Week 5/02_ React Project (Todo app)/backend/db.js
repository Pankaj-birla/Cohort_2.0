const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pankajbirla71:pnkj@cohortcluster.xukvlpm.mongodb.net/Todo-App");

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}