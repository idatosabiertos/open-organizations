const routes = require('express').Router();
const importData = require('../services/import/opendatasoft/import-data');
const organizationsService = require('../services/organizations/organizations.service');
const countriesService = require('../services/country/countries.service');

function callBackHandleReponse(res){
    return function (error, results, fields) {
        if (error) res.json(error);
        res.json(results);
    };
}


routes.get('/', (req, res) => {
    res.status(200).json({message: 'Connected!'});
});

routes.get('/data', (req, res) => {
    res.status(200).json(importData.get());
});


routes.get('/data/:country', (req, res) => {
    res.status(200).json(importData.getByCountry(req.params.country));
});

routes.get('/data/import/do', (req, res) => {
    importData.insertData(callBackHandleReponse(res));
});

routes.get('/data/import/data', (req, res) => {
    res.status(200).json(importData.getData());
});

routes.get('/organizations/:country', (req, res) => {
    organizationsService:getOrganizationsByCountry(req.params.country, callBackHandleReponse(res));
});

routes.get('/countries', (req, res) => {
    countriesService.getCountries(true, callBackHandleReponse(res))
});



module.exports = routes;