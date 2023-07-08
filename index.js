const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('wassup')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))