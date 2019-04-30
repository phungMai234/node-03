const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
});

const controlCtrl = require('./controllers/control');

router.post('/todos', controlCtrl.postTodos);
router.get('/todos/:id', controlCtrl.getTodos);
router.post('/todos/:id', controlCtrl.postTodosId);
//router.post('/todos/toogle/:id', controlCtrl.postTodosIdToogle);
router.delete('/todos/:id', controlCtrl.delTodos);

exports.router = router;

