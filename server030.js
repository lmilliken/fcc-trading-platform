const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

// 030.  Let's start by creating a basic endpoint at /hi.  If users go to http://localhost:3000/hi, they will receive the response "Hi there!".  (Please feel free to edit this to make a more relevant endpoint)
app.get('/hi', (req, res) => {
  res.send('Hi there!');
});
