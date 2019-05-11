const Category = require('../model/Categories');
const User = require("../model/Users");

exports.creatCate = async (req, res) =>{
    const {name, user} = req.body;
    try {
        const category = new Category({
            name: name,
            user:user
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

        console.log(categories.size);

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