const mongoose = require("mongoose");
const db = require("../database");

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    user: {
        type: String
    },
    completed:{
        type: Boolean
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false});

const Todos = db.model('Todos', todoSchema);


module.exports = Todos;