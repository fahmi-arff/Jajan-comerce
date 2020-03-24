const Joi = require('@hapi/joi');
const express = require('express');
const router = express.Router();

const kategoris = [
  { id: 1 , name: 'Elektronik' },
  { id: 2 , name: 'Pakaian' },
  { id: 3 , name: 'Alat Tulis' }
]

router.get('/', (req, res) => {
  res.send(kategoris);
});

router.get('/:id', (req, res) => {
  const kategori = kategoris.find(c => c.id === parseInt(req.params.id))

  if(!kategori) return res.status(404).send(`Kategori dengan id ${req.params.id} tidak ditemukan`)
  res.send(kategori)
})

router.post('/', (req, res) => {
  const { error } = validateKategori(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  const kategori = {
    id: kategoris.length + 1,
    name: req.body.name
  };
  kategoris.push(kategori);
  res.send(kategori)
})

router.put('/:id', (req, res) => {
  const kategori = kategoris.find(c => c.id === parseInt(req.params.id));
  if(!kategori) res.status(404).send(`Kategori dengan id ${req.params.id} tidak ditemukan`);

  const { error } = validateKategori(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  kategori.name = req.body.name;
  res.send(kategori);
})

router.delete('/:id', (req, res) => {
  const kategori = kategoris.find(c => c.id === parseInt(req.params.id));
  if(!kategori) return res.status(404).send(`Kategori dengan id ${req.params.id} tidak ditemukan`);

  const index = kategoris.indexOf(kategori);
  kategoris.splice(index, 1);

  res.send(kategori);
})

function validateKategori(course){
  const schema = Joi.object({ name: Joi.string() .min(3) .required() });
  
  return schema.validate(course);
}

module.exports = router;