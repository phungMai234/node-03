const mongoose = require("mongoose");
const db = require("../database");
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    completed:{
        type: Boolean
    },

    created: {
        type: Date,
        default: Date.now
    }
});

const Model1 = db.model('Model1', todoSchema);


module.exports = Model1;