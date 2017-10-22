const express = require('express')
const app = express()

const routes = require('./app/routes/index');

//app.use('/', routes);
app.use(function(req, res, next) {
    console.log(req.url, req.method);
    next();
});
app.use(routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});