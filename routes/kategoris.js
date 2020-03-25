const { Kategori, validate } = require('../models/kategori')
const express = require('express');
const router = express.Router();

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
  const { error } = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const kategori = new Kategori({ name: req.body.name });
  await kategori.save();
  res.send(kategori)
})

router.put('/:id', async(req, res) => {
  const { error } = validate(req.body);
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

module.exports = router;