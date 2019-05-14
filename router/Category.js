const express = require('express');
const router = express.Router();

const controlCategory = require('../controllers/category');


router.post('/', controlCategory.creatCate);

router.get('/', controlCategory.listCate);
router.get('/:id', controlCategory.getCateById);
router.post('/:id', controlCategory.updateCateById);
router.delete('/:id', controlCategory.delCateById);
router.get('/:id/todos', controlCategory.getTodoByCateId);

module.exports = router;