const express = require('express');
const app = express();
const port = 3000;

// Maak alle statische bestanden in de 'public' map toegankelijk
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}/kraken.html?kraken=1`);
});
