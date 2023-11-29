const express = require('express')
const port = 3001

const app = express()
const rotas = require('./rotas/latas.js')

app.use(express.json())

app.use(rotas)

// MIDDLEWARE
app.use('/rotas',(req, res, next) => {
    console.log(req.body)
    
    next();
})


app.listen(port, (err) => {
    console.log("executando na porta "+port)
})