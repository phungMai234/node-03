const express = require('express');
const todo = express.Router();


const controlTodo = require('../controllers/todo');



todo.get('/', controlTodo.listTodos);

todo.post('/', controlTodo.createTodo);
todo.get('/:id', controlTodo.getTodoById);
todo.post('/:id', controlTodo.updateTitleTodo); //find id and update title
todo.post('/:id/toogle', controlTodo.updateStatusTodo); //find id and update status completed
todo.delete('/:id', controlTodo.delTodos);


module.exports = todo;



