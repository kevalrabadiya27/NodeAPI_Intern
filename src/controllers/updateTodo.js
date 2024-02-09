const Todo = require('../models/todo')

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description,book } = req.body

        const response = await Todo.findByIdAndUpdate(
            { _id: id }, { title, description,book })
        res.status(200).json({
            sucess: true,
            data: response,
            message: 'updated sucessfully'
        })
    } catch (e) {
        res.status(400).json({
            sucess: 'false',
            data: 'nothing change'
        })
    }
}