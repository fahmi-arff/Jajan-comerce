const {Akun, validate} = require('../models/akun');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let email = await Akun.findOne({ email: req.body.email});
  if (email) return res.status(400).send('Email Sudah Terdaftar');
  
  let username = await Akun.findOne({ username: req.body.username});
  if (username) return res.status(400).send('Username telah digunakan, coba yang lain.');

  const akun = new Akun(_.pick(req.body, ['nama', 'username', 'email', 'password']))
  const salt = await bcrypt.genSalt(10);
  akun.password = await bcrypt.hash(akun.password, salt)
  await akun.save();

  res.send(_.pick(akun, ['_id','nama', 'username', 'email']));
});

module.exports = router;