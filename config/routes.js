const express = require('express')
const routes = express.Router()

// db = banco de dados
let db = [
    { '1': { nome: 'cliente 1', Idade: '20' } },
    { '2': { nome: 'cliente 2', Idade: '20' } },
    { '3': { nome: 'cliente 3', Idade: '20' } }
]


// http// podemos buscar dados, inserir dados, modificar dados e deletar dados
// selecionar dados => get
// inserir dados => push
// deletar dados => delete

routes.get('/', (req, res) => {
        return res.json(db)
    })
    // Inserir dados
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(404).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
            return item
    })

    db = newDB
    return res.send(newDB)

})



module.exports = routes