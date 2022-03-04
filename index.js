// chamando os pacotes e atribuindos as variaveis dentro do javascript 

// As variaveis passam a ser do tipo dos nossos pacotes


const express = require('express') // requisiçao ao frame express
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('bodyParser')
    // 4 variaveis que vão receber nossas dependencias


// Iniciar o servidor

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// isso é Arrow Function
app.listen(21262, () => {
    console.log('express started at http://localhost:21262')
})