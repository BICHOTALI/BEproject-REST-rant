// Modules and Globals
const express = require('express')
require('dotenv').config()
const placesController = require('./controllers/places')

const app = express()

// Middleware (express settings)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Controllers & Routes
app.use('/places', placesController)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))