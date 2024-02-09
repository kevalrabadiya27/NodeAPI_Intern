const Todo = require('../models/todo')

exports.createTodo = async (req, res) => {
    try {
        const { title, description,book } = req.body;
        const response = await Todo.create({ title, description,book })

        return res.json({
            sucess: true,
            data: response,
            message:"created sucessfully"
        })
    } catch (err) {
        res.json({
            sucess: false,
            data: 'Invalid data'
        })
    }
}
