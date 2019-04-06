const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', (req, res) => {
  res.send('Hi there!');
});

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

app.get('/buy/:ticker/:shares', (req, res) => {
  const ticker = req.params.ticker;
  const shares = req.params.shares;
  const total = shares * prices[ticker];

  res.send(
    `Transaction complete, you purchased ${shares} shares of ${ticker} at $${
      prices[ticker]
    }/share for a total of $${total}.`,
  );
});

app.get('/sell/:ticker/:shares', checkTickerAndShares, (req, res) => {
  const ticker = req.params.ticker;
  const shares = req.params.shares;
  const total = shares * prices[ticker];
  res.send(
    `Transaction complete, you sold ${shares} shares of ${ticker} at $${
      prices[ticker]
    }/share for a total of $${total}.`,
  );
});

app.get('/price/:ticker', (req, res) => {
  const ticker = req.param.ticker;

  // 120. Now let's check to make sure that 'ticker' exists in 'prices', we can use the 'in' operator.
  //Set up a conditional logic so that if 'ticker' doesn't exists in 'prices', send back a response saying 'Error: the ticker you entered is invalid.'
  if (!(ticker in prices)) {
    res.send('Error: the ticker you entered is invalid.');
  }
});
