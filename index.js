const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const error = require('./middleware/error');
const express = require('express');
const app = express();
const kategoris = require('./routes/kategoris');
const pengirimans = require('./routes/pengirimans');
const barangs = require('./routes/barangs');
const akuns = require('./routes/akuns');
const login = require('./routes/login');
const mongoose = require('mongoose');
const { jwtPrivateKey } = require('./config');

if(!jwtPrivateKey){
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

mongoose.connect('mongodb://localhost/jajanOnlen', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect ot MongoDB..'))

app.use(express.json());
app.use('/api/kategoris', kategoris);
app.use('/api/pengirimans', pengirimans);
app.use('/api/barangs', barangs);
app.use('/api/akuns', akuns);
app.use('/api/login',login);

app.use(error)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));