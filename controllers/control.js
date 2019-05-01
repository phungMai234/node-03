
let todo = require('../model/model1');

exports.postTodos= (req, res) => {

    const {title} = req.body;
    console.log(req.body);

    // tao document
    const task = new todo({
        title: title,
        completed: false,
        created: Date.now()
    });
    // luu doc
    task.save()
        .then(doc => {
            res.status(200).send({
                success: true,
                data: doc
            })
        })
        .catch(error => {
            res.status({
                success: false,
                error: error.message
            })
        })
};


exports.getTodosId= (req, res) => {

    const {id} = req.params;

    todo.findById({_id:id})
        .then(doc => {
            res.status(200).send({
                success: true,
                data: doc
            })
        })
        .catch(error => {
            res.status({
                success: false,
                error: error.message
            })
        })
};

exports.postTodosId= (req, res) => {

    const {title} = req.body; // thay bang task 2
    console.log(title);
    const {id} = req.params;

    todo.findByIdAndUpdate({_id: id}, {title: title})
        .then(doc => {
            res.status(200).send({
                success: true,
                data: doc
            })
        })
        .catch(error => {
            res.status({
                success: false,
                error: error.message
            })
        })
};


exports.postTodosIdToogle= (req, res) => {

    const {id} = req.params;
    let tmp = todo.findById(id);

    todo.updateOne(tmp,{$set:{completed: !tmp.completed}})

    .then(doc=> {
        res.status(200).send({
            success: true,
            data: doc
        })
    })
    .catch(error => {
        res.status({
            success: false,
            error: error.message
        })
    })
};

exports.delTodos= (req, res) => {
    const {id} = req.params;
    todo.findByIdAndRemove({_id: id})
        .then(()=> {
            res.status(200).send({
                success: true,
                data:true
            })
        })
        .catch(error => {
            res.status({
                success: false,
                error: error.message
            })
        })
};