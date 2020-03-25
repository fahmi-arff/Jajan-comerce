const { Pengiriman, validate } = require('../models/pengiriman');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const pengirimans = await Pengiriman.find().sort('name');
  res.send(pengirimans);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let pengiriman = new Pengiriman({ 
    kota: req.body.kota,
    tarif: req.body.tarif
  });
  pengiriman = await pengiriman.save();

  res.send(pengiriman);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
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

module.exports = router;