const router = require('express').Router()
const places = require('../models/places')

// GET new places page
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET lists places
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

// GET edit places form
router.get('/:id/edit', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if (!places[id]) {
    res.render('error404')
  } 
  else {
    res.render('places/edit', { place: places[id], id })
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


// PROBLEM WITH EdIT ROUTE, AFTER MAKING CHANGES IT GOES TO 404 PAGE

// PUT
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log(req.body)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.status(303).redirect(`/places/${id}`)
  }
})

module.exports = router