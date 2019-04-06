const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', (req, res) => {
  res.send('Hi there trader!');
});

// 040.  Now we need create a repository of stock tickers and their prices.  Create a Javascript object name 'prices' consisting of key-value pairs of tickers and their prices, you can make up these tickers and prices:
// {
//   AAPL: 140.29,
//   AMZN: 1793.30
// }
// For this project, make sure that your tickers are all in uppercase.

const prices = {
  ABC: 48.83,
  DEF: 2.98,
  GHI: 3.99,
  JKL: 99,
  MNO: 45.38,
  OPQ: 0.48,
  RST: 9.32,
  UVW: 10.94,
  XYZ: 5.32,
};
