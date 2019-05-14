const express = require('express');
const router = express.Router();

router.use("/todos", require("./Todo"));
router.use("/register", require('./User'));
router.use("/categories", require('./Category'));
router.use("/todos_categories", require('./TodoCategory'));

module.exports = router;