const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pic: { 
        type: String,
        default: 'https://cdn.pixabay.com/photo/2022/06/01/05/52/fruit-7234847_1280.jpg'
    },
    cuisines: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: 'Anytown'
    },
    state: {
        type: String,
        default: 'USA'
    },
    founded:{
        type: Number,
        min: [1800, 'Surely notthat old!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref:'Comment' }]
}) 

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)