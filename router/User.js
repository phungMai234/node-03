const express = require('express');
const router = express.Router();

const controlUser = require('../controllers/user');


router.post('/register', controlUser.register);
/*router.post('/login', controlUser.Login);*/

module.exports = router;