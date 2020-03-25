const {Barang, validate} = require('../models/barang'); 
const {Kategori} = require('../models/kategori');
const {Pengiriman} = require('../models/pengiriman');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const barang = await Barang.find().sort('name');
  res.send(barang);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const kategori = await Kategori.findById(req.body.kategoriId);
  if (!kategori) return res.status(400).send('Kategori salah.');
 
  const pengiriman = await Pengiriman.findById(req.body.pengirimanId);
  if (!pengiriman) return res.status(400).send('pengiriman salah.');

  let barang = new Barang({ 
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
  barang = await barang.save();

  res.send(barang);
});

module.exports = router;