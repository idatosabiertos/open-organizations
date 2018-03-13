const countriesDAO = require('../../dao/countries/countriesDAO');

function getCountries(active, callback) {
    return countriesDAO.get(active, callback);
}

exports.getCountries = getCountries