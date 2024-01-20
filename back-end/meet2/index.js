// import es nodules
// import { jumlah, kurang } from './modul/penjumlahan.js';
// import kurang from './modul/pengurangan.js';
// import toRupiah from '@develoka/angka-rupiah-js';
// import http from "http";
import express from "express";

// import common js
// const jumlah = require('./modul/penjumlahan');
// const kurang = require('./modul/pengurangan');

// console.log(jumlah(1, 1));
// console.log(kurang(1, 1));

// const saldo = 500000;
// console.log(toRupiah(saldo, {
//   Symbol: 'IDR',
//   floatingPoint: 0
// }));


// Http
// const Server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<h1>Hello World</h1>');
//   res.end();
// });

// Server.listen(3000, () => {
//   console.log('Server running on port 3000');
// })


// Express
const app = express();

// GET
app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/nama', (req, res) => {
  res.send('Hello nama saya Juan');
});

// request query 
app.get('/gdsc', (req, res) => {
  // (/gdsc?search=...)
  const { search } = req.query;
  console.log(search);
  if (search) {
    res.send(`Anda mencari ${search}`);
  } else {
    res.send('Anda tidak mencari apa-apa');
  }
});

// request params
app.get('/gdsc/:nama', (req, res) => {
  const { nama } = req.params;
  res.send(`Hello nama saya ${nama}`);
});

// POST
app.use(express.json());

app.post('/api', (req, res) => {
  const { body } = req;
  console.log(body);
  res.send(body);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

