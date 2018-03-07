const organizationsDAO = require('../../dao/organizations/organizationsDAO');

function getOrganizationsByCountry(country, callback) {
    return organizationsDAO.get(country, callback);
}

exports.getOrganizationsByCountry = getOrganizationsByCountry;