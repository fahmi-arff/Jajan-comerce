const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const {kategoriSchema} = require('./kategori');
const {pengirimanSchema} = require('./pengiriman');

const Barang = mongoose.model('barang', new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  kategori: { 
    type: kategoriSchema,  
    required: true
  },
  stok: { 
    type: Number, 
    required: true,
    min: 0,
    max: 4999
  },
  harga: { 
    type: Number, 
    required: true,
    min: 1
  },
  terjual: { 
    type: Number, 
    required: true,
    min: 0,
    max: 4999
  },
  pengiriman: { 
    type: pengirimanSchema,  
    required: true
  },
}));

function validateBarang(barang) {
  const schema = Joi.object({ 
    nama: Joi.string().min(5).max(50).required(),
    kategoriId: Joi.string().required(),
    stok: Joi.number().min(0).required(),
    harga: Joi.number().min(1).required(),
    terjual: Joi.number().min(0).required(),
    pengirimanId: Joi.string().required()
  });

  return schema.validate(barang);
}

exports.Barang = Barang; 
exports.validate = validateBarang;