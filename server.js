var express = require('express'),
    app = express(),
    port = process.env.PORT | 4000;
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/readerRoutes');
routes(app);

app.listen(port);

console.log('reader RESTful API server started on: ' + port);



