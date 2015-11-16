var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded


app.get('/api', function (req, res) {
    // res.json(req.body)
  res.send('Hello World!');
  console.log('query'+JSON.stringify(req.query));
  console.log('body'+JSON.stringify(req.body));
  console.log('params:'+JSON.stringify(req.params));
});
app.post('/api',function(req,res){

    var query_par = JSON.stringify(req.query);
    var send_body = JSON.stringify(req.body);
    var send_par = JSON.stringify(req.params);

    var send_method = send_body['method'];
    var send_data = send_body['data'];
})
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});