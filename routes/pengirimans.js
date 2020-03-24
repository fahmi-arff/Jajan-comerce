const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Pengiriman = mongoose.model('pengiriman', new mongoose.Schema({
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
}));

router.get('/', async (req, res) => {
  const pengirimans = await Pengiriman.find().sort('name');
  res.send(pengirimans);
});

router.post('/', async (req, res) => {
  const { error } = validatePengiriman(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let pengiriman = new Pengiriman({ 
    kota: req.body.kota,
    tarif: req.body.tarif
  });
  pengiriman = await pengiriman.save();

  res.send(pengiriman);
});

router.put('/:id', async (req, res) => {
  const { error } = validatePengiriman(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const pengiriman = await Pengiriman.findByIdAndUpdate(req.params.id,
    { 
      kota: req.body.kota,
      tarif: req.body.tarif
    }, { new: true });

  if (!pengiriman) return res.status(404).send(`Pengiriman dengan id ${req.params.id} tidak ditemukan`);

  res.send(pengiriman);
});

router.delete('/:id', async (req, res) => {
  const pengiriman = await Pengiriman.findByIdAndRemove(req.params.id);

  if (!pengiriman) return res.status(404).send(`Pengiriman dengan id ${req.params.id} tidak ditemukan`);

  res.send(pengiriman);
});

router.get('/:id', async (req, res) => {
  const pengiriman = await Pengiriman.findById(req.params.id);

  if (!pengiriman) return res.status(404).send(`Pengiriman dengan id ${req.params.id} tidak ditemukan`);

  res.send(pengiriman);
});

function validatePengiriman(pengiriman) {
  const schema = Joi.object({ 
    kota: Joi.string().min(5).max(50).required(),
    tarif: Joi.number().min(5).max(50000).required() 
  });
  
  return schema.validate(pengiriman);
}

module.exports = router;