const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  supplier: { type: String, required: true },
  product: { type: String, required: true },
  price: { type: Number, required: true }
})

module.exports = mongoose.model('Item', itemSchema)
