const Todo = require('../models/todo')

exports.deleteTodo = async (req, res) => {
  try {
    const response = await Todo.findByIdAndDelete(req.params.id)
    res.json({
      sucess: true,
      data: response
    })
  } catch (e) {
    res.json({
      sucess: false,
      data: 'not deleted'
    })
  }
}
