const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello, world!')
});

const controlCtrl = require('/home/mai/Documents/node-03/controllers/control.js');

router.post('/todos', controlCtrl.postTodos);
router.get('/todos/:id', controlCtrl.getTodos);
router.post('/todos/:id', controlCtrl.postTodosId);
//Sai voi yeu cau
//router.post('/todos/toogle/:id', controlCtrl.postTodosIdToogle);
router.delete('/todos/:id', controlCtrl.delTodos);

exports.router = router;

