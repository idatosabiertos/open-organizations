const organizationsDAO = require('../../../dao/organizations/organizationsDAO');

function callBackHandleReponseConsole(res){
    return function (error, results, fields) {
        if (error) console.log(error);
        console.log("OK");
    };
}

function getData () {
    const data = require('../../../resources/open-data-sources.json');
    return data;
}

function getByCountry (country) {
    return getData().filter(function (item) {
        return item && item.fields && item.fields.country_slug === country;
    })
}

function getDataAll () {
    return organizationsDAO.get();
}

function insertData (callback) {
    var data = getData();

    for (let item of data) {
        //console.log(item);
        var organization = {
            name: item.fields.name,
            name_es: item.fields.code_es,
            name_pt: item.fields.code_es,
            name_en: item.fields.code_en,
            latitude: item.geometry ? item.geometry.coordinates[0] : null,
            longitude:  item.geometry ? item.geometry.coordinates[1] : null,
            country_code: item.fields.country_slug,
            country: item.fields.country,
            url: item.fields.url
        };
        organizationsDAO.add(organization, callBackHandleReponseConsole);
    }

    callback(null, true, null);
}

exports.get = getData;
exports.getData = getDataAll;
exports.getByCountry = getByCountry;
exports.insertData = insertData;