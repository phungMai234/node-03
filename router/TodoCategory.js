const express = require('express');
const router = express.Router();


const controlTodoCategory = require('../controllers/todoCategories');


router.post('/', controlTodoCategory.createTodoCategory);

module.exports = router;