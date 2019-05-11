let Todo = require('../model/Todos');
const User = require("../model/Users");
const Category = require('../model/Categories');
const TodoCategory = require('../model/TodoCategories');

exports.createTodo = async (req, res) => {
    try {
        const {title, user} = req.body;

        console.log(title);

        const todo = new Todo({
            title: title,
            user:user,
            completed: false,
            created: Date.now()
        });

        const doc = await todo.save();

        const docUser = await User.findById(doc.user);
        doc.user = docUser;

        return res.status(200).send({
            success: true,
            data: doc
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }

};


exports.getTodoById = async (req, res) => {
    const {id} = req.params;
    try {
        let todo = await Todo.findById(id);
        console.log(typeof todo);
        let b = {};
        b.id = todo._id;
        b.user = todo.user;
        const docUser = await User.findById(todo.user);
        console.log(b);
        b.User = docUser;
        todo.cate = {hello: "abc"};
        //cate
        const docTodoCate = await TodoCategory.find({todo_id: todo._id.toString()});
        let arrayCate = [];
        let i;
        for(i = 0; i < docTodoCate.length; i++) {
            const docCate = await Category.findById(docTodoCate[i].cate_id);
            arrayCate.push(docCate);
        }
        //todo.categories =" hello";
        res.status(200).send({
            success: true,
            data:b
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }

};

exports.listTodos = async (req, res) => {
    try {
        const todos = await Todo.find();

        res.status(200).send({
            success: true,
            data:todos
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
};

exports.updateTitleTodo =async (req, res) => {


    const {id} = req.params;
    const {title} = req.body;
    try {
        const todo = await Todo.findByIdAndUpdate({_id:id},{title: title}, {new: true});

        const docUser = await User.findById(todo.user);
        todo.user = docUser;

        const docTodoCate = await TodoCategory.find({todo_id: todo._id.toString()});
        const docCate = await Category.findById(docTodoCate.cate_id);
        todo.categories = docCate;

        res.status(200).send({
            success: true,
            data: todo
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }

};

exports.updateStatusTodo = async (req, res) => {

    const {id} = req.params;
    try {
        /*find*/
        const todo = await Todo.findById({_id:id});
        let completed = todo.completed;
        /*update*/
        await Todo.updateOne(todo,{$set: {completed: !completed}});

        const docUser = await User.findById(todo.user);
        todo.user = docUser;

        const docTodoCate = await TodoCategory.find({todo_id: todo._id.toString()});
        const docCate = await Category.findById(docTodoCate.cate_id);
        todo.categories = docCate;

        res.status(200).send({
            success: true,
            data: todo
        })

    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }

};

exports.delTodos = async (req, res) => {
    const {id} = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            data: true
        })
    }
    catch (e) {
        res.send({
            success: false,
            message: e.message,
        })
    }
};