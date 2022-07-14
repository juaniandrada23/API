const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors');

const routes = require('./routes')
const revision = require('./revisiones')

const app = express()
app.set('port', process.env.PORT)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: 'importdb'
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

