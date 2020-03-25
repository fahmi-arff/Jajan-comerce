const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Kategori = mongoose.model('kategori', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateKategori(kategori){
  const schema = Joi.object({ name: Joi.string() .min(3) .required() });
  
  return schema.validate(kategori);
}

exports.Kategori = Kategori;
exports.validate = validateKategori;