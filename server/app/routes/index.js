const routes = require('express').Router();
const importData = require('../services/import/opendatasoft/import-data');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

routes.get('/data', (req, res) => {
    res.status(200).json(importData.get());
});


routes.get('/data/:country', (req, res) => {
    res.status(200).json(importData.getByCountry(req.params.country));
});

routes.get('/data/import/do', (req, res) => {
    res.status(200).json(importData.insertData());
});

module.exports = routes;