
const TodoCategory = require('../model/TodoCategories');

exports.createTodoCategory = async (req, res) => {
    const {todo_id, cate_id} = req.body;
    try {

        const todoCatefory = new TodoCategory({
            todo_id:todo_id,
            cate_id:cate_id
        });

        const doc = await todoCatefory.save();

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
