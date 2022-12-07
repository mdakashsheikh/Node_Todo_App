const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('todo', TodoItemSchema);