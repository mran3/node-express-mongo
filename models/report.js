const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    cabId: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    comment: {
      type: String
    }
  })

  module.exports = mongoose.model('Subscriber', reportSchema)
