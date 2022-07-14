const express = require('express')
require("./data/config")
const cors = require('cors');

const routes = require('./routes')
const revision = require('./revisiones')

const app = express()
app.set('port', process.env.PORT)
app.use(express.json())
app.use(cors())

// routes -------------------------------------------
app.get('/', (req, res)=>{
    const content = `
    <h1>Server con Express</h1>
    <pre>primera prueba de servidor con Node y el framework Express</pre>
    `;
  res.send(content);
})
app.use('/api', routes)
app.use('/api1', revision)

app.use((req, res, next) => {
  let error = new Error();
  error.status = 404;
  error.message = "Resource not found";
  next(error);
});

// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

