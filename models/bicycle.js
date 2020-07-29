const {Schema, model} = require('mongoose')
const bicycle = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})

module.exports = model('Bicycle', bicycle)