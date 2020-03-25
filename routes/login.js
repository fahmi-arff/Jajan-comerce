require('dotenv').config()
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Akun} = require('../models/akun');
const express = require('express');
const router = express.Router();
const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;

router.post('/', async(req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let akun = await Akun.findOne({ email: req.body.email});
  if (!akun) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, akun.password);
  if (!validPassword) return res.status(400).send('Invalid password.');

  const token = jwt.sign({ _id: akun._id }, jwtPrivateKey )
  res.send(token);
});

function validate(req){
  const schema = Joi.object({ 
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required() 
  });
  
  return schema.validate(req);
}

module.exports = router;