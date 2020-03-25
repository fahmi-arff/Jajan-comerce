const {Barang, validate} = require('../models/barang'); 
const {Kategori} = require('../models/kategori');
const {Pengiriman} = require('../models/pengiriman');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const barang = await Barang.find().sort('name');
  res.send(barang);
});

router.get('/:id', async (req, res) => {
  const barang = await Barang.findById(req.params.id);

  if (!barang) return res.status(404).send(`Barang dengan id ${req.params.id} tidak ditemukan`);

  res.send(barang);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const kategori = await Kategori.findById(req.body.kategoriId);
  if (!kategori) return res.status(400).send('Kategori ID salah.');
 
  const pengiriman = await Pengiriman.findById(req.body.pengirimanId);
  if (!pengiriman) return res.status(400).send('pengiriman ID salah.');

  const barang = new Barang({ 
    nama: req.body.nama,
    kategori: {
      _id: kategori._id,
      name: kategori.name
    },
    stok: req.body.stok,
    harga: req.body.harga,
    terjual: req.body.terjual,
    pengiriman: {
      _id: pengiriman._id,
      kota: pengiriman.kota,
      tarif: pengiriman.tarif
    },
  });
  await barang.save();

  res.send(barang);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const kategori = await Kategori.findById(req.body.kategoriId);
  if (!kategori) return res.status(400).send('Kategori salah.');
 
  const pengiriman = await Pengiriman.findById(req.body.pengirimanId);
  if (!pengiriman) return res.status(400).send('Pengiriman salah.');

  const barang = await Barang.findByIdAndUpdate(req.params.id,
    { 
    nama: req.body.nama,
    kategori: {
      _id: kategori._id,
      name: kategori.name
    },
    stok: req.body.stok,
    harga: req.body.harga,
    terjual: req.body.terjual,
    pengiriman: {
      _id: pengiriman._id,
      kota: pengiriman.kota,
      tarif: pengiriman.tarif
    },
    }, { new: true });

  if (!barang) return res.status(404).send(`Barang dengan id ${req.params.id} tidak ditemukan`);

  res.send(barang);
});

router.delete('/:id', async (req, res) => {
  const barang = await Barang.findByIdAndRemove(req.params.id);

  if (!barang) return res.status(404).send(`Barang dengan id ${req.params.id} tidak ditemukan`);

  res.send(barang);
});

module.exports = router;