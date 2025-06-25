const mongoose = require("mongoose");
const uri = process.env.MONGO_URL;
// Connect to MongoDB
mongoose.connect(uri);

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}