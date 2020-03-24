const express = require('express');
const app = express();
const kategoris = require('./routes/kategoris');

app.use(express.json());
app.use('/api/kategoris', kategoris);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));