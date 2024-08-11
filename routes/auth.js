/*
    Rutas de Auth
    host + /api/auth
*/

const { Router } = require('express');
const {login} = require('../controllers/authController');
const router = Router();

router.post('/', login);


module.exports = router;