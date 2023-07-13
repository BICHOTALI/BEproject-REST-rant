const router = require('express').Router()
const places = require('../models/places')

// GET new places page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

// GET place details by index 
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if (!places[id]) {
    res.render('error404')
  } 
  else {
    res.render('places/show', { 
      place: places[id],
      id
    })
  }
})

router.get('/:id/edit', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if (!places[id]) {
    res.render('error404')
  } 
  else {
    res.render('places/edit', {
      place: places[id]
    })
  }
})


// POST creates new place
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// DELETE delete a place
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if (!places[id]) {
    res.render('error404')
  } 
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


module.exports = router