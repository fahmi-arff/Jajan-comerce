const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const kategoriSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
})

const Kategori = mongoose.model('kategori', kategoriSchema);

function validateKategori(kategori){
  const schema = Joi.object({ name: Joi.string() .min(3) .required() });
  
  return schema.validate(kategori);
}

exports.kategoriSchema = kategoriSchema;
exports.Kategori = Kategori;
exports.validate = validateKategori;