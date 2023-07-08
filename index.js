const express = require('express')
require('dotenv').config()
const placesController = require('./controllers/places')

const app = express()

//Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', placesController)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))