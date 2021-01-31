const express = require('express')
const sequelize = require('./db/db')
const index = require('./routes/index.routes')

const app = express()
const PORT = 3000


app.use(express.json())
app.use('/', index)


app.listen(PORT, async () => {
    try {
        await sequelize.authenticate()
        console.log("Escuchando el puerto 3000")
    } catch (error) {
        console.log(error)
    }
})