const express = require('express')
    const router = express.Router();

const controlCtrl = require('./controllers/control');
router.get('/', controlCtrl.getTodos);
router.post('/', controlCtrl.postTodos);
router.get('/:id', controlCtrl.getTodosId);
router.post('/:id', controlCtrl.postTodosId); //find id and update title
router.post('/:id/toogle', controlCtrl.postTodosIdToogle); //find id and update status completed
router.delete('/:id', controlCtrl.delTodos);

module.exports = router;

