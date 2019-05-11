const mongoose = require("mongoose");
const db = require("../database");

const CategorySchema = mongoose.Schema({
    name: {
        type: String
    },
    user: {
        type: String
    },
    completed: {
        type: Boolean
    },
    created:
    {
        type: Date,
        default: Date.now()
    }
});

const Category = db.model('Category', CategorySchema);

module.exports = Category;