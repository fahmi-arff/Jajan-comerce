const jwt = require('jsonwebtoken');
const { jwtPrivateKey } = require('../config');
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const akunSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  phone: {
    type: String,
    minlength: 5,
    maxlength: 50
  },
  alamat: {
    type: String,
    minlength: 5,
    maxlength: 500
  },
  pesanan: {
    type: String,
    minlength: 5,
    maxlength: 50
  }
})

akunSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({ _id: this._id}, jwtPrivateKey)
  return token
}

const Akun = mongoose.model('akun', akunSchema)

function validateAkun(akun) {
  const schema = Joi.object({ 
    nama: Joi.string().min(5).max(50).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string().min(5).max(255).required().email(),
  });

  return schema.validate(akun);
}

function validatePatchAkun(akun) {
  const schema = Joi.object({ 
    nama: Joi.string().min(5).max(50).required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    phone: Joi.string().min(10).max(15),
    alamat: Joi.string().min(10).max(150),
    pesanan: Joi.objectId()
  });

  return schema.validate(akun);
}

exports.Akun = Akun; 
exports.validate = validateAkun;
exports.validatePatch = validatePatchAkun;