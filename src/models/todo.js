const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        book:{
            type:Number,
            required:true,
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
);
module.exports = mongoose.model('Todo',TodoSchema);