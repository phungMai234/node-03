const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
});

const controlCtrl = require('./controllers/control');

router.post('/todos', controlCtrl.postTodos);
router.get('/todos/:id', controlCtrl.getTodosId);
router.post('/todos/:id', controlCtrl.postTodosId); //find id and update title
router.post('/todos/:id/toogle', controlCtrl.postTodosIdToogle); //find id and update status completed
router.delete('/todos/:id', controlCtrl.delTodos);

exports.router = router;

