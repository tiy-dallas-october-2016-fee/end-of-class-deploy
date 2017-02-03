var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(6754, function() {
  console.log('Listening on port 6754.');
});
