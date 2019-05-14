const Category = require('../model/Categories');
const User = require("../model/Users");
let Todo = require('../model/Todos');
const TodoCategory = require('../model/TodoCategories');


exports.creatCate = async (req, res) =>{
    const {name} = req.body;
    try {
        const users = await User.find({});
        const userId = users[0]._id;

        const category = new Category({
            name: name,
            user:userId
        });
        const doc = await category.save();

        const docUser = await User.findById(category.user);
        category.user = docUser;

        return res.send({
            success: true,
            data: doc.toJSON()
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message
        })
    }
};
exports.listCate = async (req, res) =>{
    try {
        let categories = await Category.find();

        return res.send({
            success: true,
            data: categories
        });
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
};
exports.getCateById = async (req, res) =>{
    const {id} = req.params;
    try {
        let category = await Category.findById(id);

        const docUser = await User.findById(category.user);

        category.user = docUser;

        return res.send({
            success: true,
            data: category
        });
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
};
exports.updateCateById = async (req, res) =>{
    const {id} = req.params;
    const {name} = req.body;
    try {
        let category = await Category.findByIdAndUpdate(id,{name: name}, {new: true});

        const docUser = await User.findById(category.user);
        category.user = docUser;

        return res.send({
            success: true,
            data:category
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
};
exports.delCateById = async (req, res) =>{
    const {id} = req.params;
    try {
        await Category.findByIdAndDelete(id);
        return res.send({
            success: true,
            data: true
        });
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
};
exports.getTodoByCateId = async (req, res) =>{
    const {id} = req.params;
    try {

        const docTodoCate = await TodoCategory.find({cate_id: id.toString()});
        let arrayTodo = [];
        let i;
        for(i = 0; i < docTodoCate.length; i++) {
            const docTodo = await Todo.findById(docTodoCate[i].todo_id);
            arrayTodo.push(docTodo);
        }
        return res.send({
            success: true,
            data: arrayTodo
        });


    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
}