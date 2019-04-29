
let todo = require('/home/mai/Documents/node-03/model/model1.js');
//done
exports.postTodos= (req, res) => {

    const {title} = req.body;
    console.log(req.body);

    // tao document
    //Cai id la cai mongodb no tu sinh ra
    const task = new todo({
        //_id: id,
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

//done
exports.getTodos= (req, res) => {

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

//done
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

//K ban toi dung sai cua cau nay vi chua ro de
/*exports.postTodosIdToogle= (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    console.log(req.body);

    // tao document
    const task = new todo({
        _id:id,
        title: title,
        completed: false,
        created: Date.now()
    });
    // luu doc
    task.save()

        .then(doc => {
            res.send({
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
};*/

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