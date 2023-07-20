// Modules and Globals
const express = require('express')
require('dotenv').config()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const placesController = require('./controllers/places')


const app = express()

// Middleware (express settings)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// Controllers & Routes
app.use('/places', placesController)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true }) 
    .then(() => console.log('DB connected')) 
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))