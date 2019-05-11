const express = require('express');
const router = express.Router();

const controlCategory = require('../controllers/category');


router.post('/categories', controlCategory.creatCate);

router.get('/categories', controlCategory.listCate);
router.get('/categories/:id', controlCategory.getCateById);
router.post('/categories/:id', controlCategory.updateCateById);
router.delete('/categories/:id', controlCategory.delCateById);

module.exports = router;