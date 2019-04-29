const mongoose = require("mongoose");


const todoSchema = mongoose.Schema({
    title: {
        type: String
    },
    completed:{
        type: Boolean
    },

    created: {
        type: Date,
        default: Date.now
    }
});

const Model1 = mongoose.model('Model1', todoSchema);


module.exports = Model1;