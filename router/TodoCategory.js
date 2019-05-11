const express = require('express');
const router = express.Router();

const controlTodoCategory = require('../controllers/todoCategories');


router.post('/todocategories', controlTodoCategory.createTodoCategory);

module.exports = router;