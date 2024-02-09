const mongoose = require('mongoose')

const signUp = mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},{ timestamps: true })

module.exports = mongoose.model('users',signUp)