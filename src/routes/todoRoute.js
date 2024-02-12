const express = require('express')
const router = express.Router()
// import route
const { createTodo } = require('../controllers/createTodo')
const { getTodoAll, getTodo, getTodoFilter } = require('../controllers/getTodo')
const { updateTodo } = require('../controllers/updateTodo')
const { deleteTodo } = require('../controllers/deleteTodo')

// define API route
router.post('/todo/create', createTodo)


router.get('/todo/getall', getTodoAll)
router.get('/todo/get/:id', getTodo)
router.get('/todo/getFilter',getTodoFilter)

router.put('/todo/update/:id', updateTodo)
router.delete('/todo/delete/:id', deleteTodo)

module.exports = router;


