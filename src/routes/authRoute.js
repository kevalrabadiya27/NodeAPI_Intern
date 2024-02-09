const express = require('express');
const router = express.Router();

const {signUp,signIn} = require('../controllers/auth.js')
const validate = require('../middleware/validate.js')

router.post('/signup',signUp)
router.post('/signin',signIn)

module.exports = router;