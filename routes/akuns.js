const auth = require('../middleware/auth');
const {Akun, validate, validatePatch} = require('../models/akun');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');

router.get('/me', auth, async (req,res) => {
  const akun = await Akun.findById(req.user._id).select('-password');
  res.send(akun);
})

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

  const token = akun.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(akun, ["_id", 'nama', 'email']))
});

router.patch('/me', auth, async(req, res) => {
  const { error } = validatePatch(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let username = await Akun.findOne({ username: req.body.username});
  if (username) return res.status(400).send('Username telah digunakan, coba yang lain.');

  const akun = await Akun.findByIdAndUpdate(req.user._id,
    { 
    nama: req.body.nama,
    username : req.body.username,
    alamat: req.body.alamat,
    phone: req.body.phone,
    }, { new: true }).select('-password');

  res.send(akun);
});

module.exports = router;