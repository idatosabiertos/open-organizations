const express = require('express')
const app = express()

const routes = require('./app/routes/index');

//app.use('/', routes);

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    console.log(req.url, req.method);
    next();
});
app.use(routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});