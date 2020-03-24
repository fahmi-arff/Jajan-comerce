const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Kategori = mongoose.model('kategori', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

router.get('/', async(req, res) => {
  const kategoris = await Kategori.find().sort('name');
  res.send(kategoris);
});

router.get('/:id', async(req, res) => {
  const kategori = await Kategori.findById(req.params.id)

  if(!kategori) return res.status(404).send(`Kategori dengan id ${req.params.id} tidak ditemukan`)
  res.send(kategori)
})

router.post('/', async(req, res) => {
  const { error } = validateKategori(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  let kategori = new Kategori({ name: req.body.name });
  kategori = await kategori.save();
  res.send(kategori)
})

router.put('/:id', async(req, res) => {
  const { error } = validateKategori(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const kategori = await Kategori.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  )
  if(!kategori) return res.status(404).send(`Kategori dengan id ${req.params.id} tidak ditemukan`);

  res.send(kategori);
})

router.delete('/:id', async(req, res) => {
  const kategori = await Kategori.findByIdAndRemove(req.params.id);
  if(!kategori) return res.status(404).send(`Kategori dengan id ${req.params.id} tidak ditemukan`);

  res.send(kategori);
})

function validateKategori(kategori){
  const schema = Joi.object({ name: Joi.string() .min(3) .required() });
  
  return schema.validate(kategori);
}

module.exports = router;