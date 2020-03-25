const {Akun, validate} = require('../models/akun');
const express = require('express');
const router = express.Router();

router.post('/', async(req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let email = await Akun.findOne({ email: req.body.email});
  if (email) return res.status(400).send('Email Sudah Terdaftar');
  
  let username = await Akun.findOne({ username: req.body.username});
  if (username) return res.status(400).send('Username telah digunakan, coba yang lain.');

  const akun = new Akun({
    nama: req.body.nama,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  await akun.save();

  res.send(akun);
});

module.exports = router;