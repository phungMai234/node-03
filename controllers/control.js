let todo = require('../model/model1');

exports.postTodos = (req, res) => {

    const {title} = req.body;


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


exports.getTodosId = (req, res) => {

    const {id} = req.params;

    todo.findById({_id: id})
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

exports.getTodos = (req, res) => {
    todo.find()
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

exports.postTodosId = (req, res) => {

    const {title} = req.body; // thay bang task 2
    console.log(title);
    const {id} = req.params;

    todo.findByIdAndUpdate({_id: id}, {title: title}, {new: true})
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


exports.postTodosIdToogle = (req, res) => {

    const {id} = req.params;

    todo.findById({_id: id}).then(tmp => {

        let completed = tmp.completed;
        console.log(completed);

        todo.updateOne(tmp, {$set: {completed: !completed}}, function (err, res) {
            if (!err)
                console.log("done");
            else
                console.log(err);
        });
        todo.findById({_id: id})
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
    })
        .catch(error => {
            res.status({
                success: false,
                error: error.message
            })
        })
};

exports.delTodos = (req, res) => {
    const {id} = req.params;
    todo.findByIdAndRemove({_id: id})
        .then(() => {
            res.status(200).send({
                success: true,
                data: true
            })
        })
        .catch(error => {
            res.status({
                success: false,
                error: error.message
            })
        })
};