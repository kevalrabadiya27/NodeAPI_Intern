const express = require('express');
const dotenv = require('dotenv').config()
const cookieparser = require('cookie-parser')
const app = express();
const DBcon = require('./src/config/dbConnection');

// import route
const TodoRoute = require('./src/routes/todoRoute')
const authRoute  = require('./src/routes/authRoute');

app.use(express.json())
app.use(cookieparser())

// mount API routes 
app.use('/api/v1', TodoRoute)
app.use('/api/v1',authRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})

DBcon();

