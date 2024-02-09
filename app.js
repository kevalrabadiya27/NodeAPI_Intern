const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const DBcon = require('./src/config/dbConnection');

// import route
const TodoRoute = require('./src/routes/todoRoute')
const authRoute  = require('./src/routes/authRoute');
// import middleware
const { validate } = require('./src/middleware/validate');

// middleware to parse json
app.use(express.json())

// mount API routes 
app.use('/api/v1', TodoRoute)
app.use('/api/v1',validate,authRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})

DBcon();

