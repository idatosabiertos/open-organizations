const organizationsDAO = require('../../../dao/organizations/organizationsDAO');

function getData () {
    const data = require('../../../resources/open-data-sources.json');
    return data;
}

function getByCountry (country) {
    return getData().filter(function (item) {
        return item && item.fields && item.fields.country_slug === country;
    })
}

function insertData () {
    var data = getData();

    for (let item of data) {
        //console.log(item);
        var organization = {
            name: item.fields.name,
            latitude: item.geometry ? item.geometry.coordinates[0] : null,
            longitude:  item.geometry ? item.geometry.coordinates[1] : null,
            country: item.fields.country_slug
        };
        organizationsDAO.add(organization);
    }
}

exports.get = getData;
exports.getByCountry = getByCountry;
exports.insertData = insertData;