const express = require('express');
const app = express();
const kategoris = require('./routes/kategoris');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jajanOnlen', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect ot MongoDB..'))

app.use(express.json());
app.use('/api/kategoris', kategoris);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));