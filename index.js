const express = require('express');
const PORT = 5000;

const app = express();

app.get('/api', (req, res) => {
  res.json('I am the backend!');
});

app.get('/', (req, res) => {
  console.log(1)
  res.json('I am the backend!');
});

app.listen(PORT, () => {
  console.log(`App backend listening on port ${PORT}`);
});
