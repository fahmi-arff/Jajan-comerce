const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const app = express();
const kategoris = require('./routes/kategoris');
const pengirimans = require('./routes/pengirimans');
const barangs = require('./routes/barangs');
const akuns = require('./routes/akuns');
const login = require('./routes/login');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jajanOnlen', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect ot MongoDB..'))

app.use(express.json());
app.use('/api/kategoris', kategoris);
app.use('/api/pengirimans', pengirimans);
app.use('/api/barangs', barangs);
app.use('/api/akuns', akuns);
app.use('/api/login',login);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));