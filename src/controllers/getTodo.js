const Todo = require('../models/todo')

exports.getTodoAll = async (req, res) => {
    try {
        const response = await Todo.find()
        return res.json({
            sucess: true,
            data: response
        })
    }
    catch (e) {
        res.status(500).json({
            sucess: false,
            data: 'something wrong'
        })
    }
}
exports.getTodo = async (req, res) => {
    try {
        const response = await Todo.findById(req.params.id);
        return res.status(200).json({
            sucess: true,
            data: response
        })
    } catch (e) {
        return res.status(500).json({
            sucess: false,
            data: 'something wrong'
        })
    }
}
exports.getTodoFilter = async (req, res) => {
    try {
        const bookvalue = req.query.book
        const response = await Todo.find(
            {book:{$gte:bookvalue}}
            ).sort({ createdAt: -1 }).limit(3)
        return res.status(200).json({
            sucess: true,
            data: response
        })
    }
    catch (e) {
        res.status(500).json({
            sucess: false,
            data: 'something wrong'
        })
    }
}