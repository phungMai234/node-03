const mongoose = require("mongoose");
const db = require("../database");

const TodoCateSchema = mongoose.Schema({
    todo_id: {
        type: String
    },
    cate_id:{
        type: String
    }
});

const TodoCategories = db.model('TodoCategories', TodoCateSchema);

module.exports = TodoCategories;