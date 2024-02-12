const express = require('express');
const router = express.Router();

const {signUp,signIn} = require('../controllers/auth.js')
const  {authentication}  = require('../middleware/authentication.js');
const { validate } = require('../middleware/validate.js');

router.post('/signup',signUp)
router.post('/signin',authentication,signIn)

module.exports = router;