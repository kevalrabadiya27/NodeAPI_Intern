const express = require('express')
const router = express.Router()
// import route
const { createTodo } = require('../controllers/createTodo')
const { getTodoAll, getTodo, getTodoFilter } = require('../controllers/getTodo')
const { updateTodo } = require('../controllers/updateTodo')
const { deleteTodo } = require('../controllers/deleteTodo')

// define API route
router.post('/createTodo', createTodo)

router.get('/getTodoAll', getTodoAll)
router.get('/getTodo/:id', getTodo)
router.get('/getTodoFilter',getTodoFilter)

router.put('/updateTodo/:id', updateTodo)
router.delete('/deleteTodo/:id', deleteTodo)

module.exports = router;


