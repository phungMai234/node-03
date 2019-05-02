const router = require('express').Router();

const controlCtrl = require('./controllers/control');

router.post('/', controlCtrl.postTodos);
router.get('/:id', controlCtrl.getTodosId);
router.post('/:id', controlCtrl.postTodosId); //find id and update title
router.post('/:id/toogle', controlCtrl.postTodosIdToogle); //find id and update status completed
router.delete('/:id', controlCtrl.delTodos);

exports.router = router;

