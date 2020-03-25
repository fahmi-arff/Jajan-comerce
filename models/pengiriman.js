const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Pengiriman = mongoose.model('pengiriman', new mongoose.Schema({
  kota: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  tarif: {
    type: Number,
    required: true,
    min: 3,
    max: 50000
  }
}));

function validatePengiriman(pengiriman) {
  const schema = Joi.object({ 
    kota: Joi.string().min(5).max(50).required(),
    tarif: Joi.number().min(5).max(50000).required() 
  });
  
  return schema.validate(pengiriman);
}

exports.Pengiriman = Pengiriman;
exports.validate = validatePengiriman;