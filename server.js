var express = require('express');
var app = express();

app.get('/name', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:"Lisa",
      last_name:"Anthonioz"
   };
   console.log(response);
   res.end(response);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})