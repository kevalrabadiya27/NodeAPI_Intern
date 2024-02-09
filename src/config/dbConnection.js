const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

async function DBconn() {
    try{
        await mongoose.connect(process.env.MONGOURL)
        console.log('DB connected Sucessfully');
    }catch(err){
        console.log(err)
    }
    
}

module.exports = DBconn;