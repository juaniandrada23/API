const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors');

const routes = require('./routes')
const revision = require('./revisiones')

const app = express()
app.set('port', process.env.PORT)
const dbOptions = {
    host: 'us-cdbr-east-06.cleardb.net',
    port: 3306,
    user: 'bc7c6e2bc89178',
    password: 'ffa8caa0',
    database: 'heroku_95d49ace277e61a?reconnect=true'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)
app.use('/api1', revision)

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

