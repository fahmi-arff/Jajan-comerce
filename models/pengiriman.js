const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const pengirimanSchema = new mongoose.Schema({
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
})

const Pengiriman = mongoose.model('pengiriman', pengirimanSchema);

function validatePengiriman(pengiriman) {
  const schema = Joi.object({ 
    kota: Joi.string().min(5).max(50).required(),
    tarif: Joi.number().min(5).max(50000).required() 
  });
  
  return schema.validate(pengiriman);
}

exports.pengirimanSchema = pengirimanSchema;
exports.Pengiriman = Pengiriman;
exports.validate = validatePengiriman;