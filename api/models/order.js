const mongoose = require('mongoose')

const orderShcema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', requierd: true},
    quantity: { type: Number, default: 1 }
})

module.exports = mongoose.model('Order', orderShcema)