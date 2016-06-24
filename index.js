var twilio = require('twilio'),
    express = require('express'),
    firebase = require('firebase'),
    sentiment = require('sentiment'),
    bodyParser = require('body-parser');
    
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/message', function (req, res) {
  if (req.body.Body != undefined) {
    var sentimentResult = sentiment(req.body.Body.trim());
    console.log(req.body.Body.trim());
    console.log(sentimentResult.score);    
  }

  /*
  var resp = new twilio.TwimlResponse();
  resp.message('Thanks for subscribing!');
  res.writeHead(200, {
    'Content-Type':'text/xml'
  });
  res.end(resp.toString());
  */
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});