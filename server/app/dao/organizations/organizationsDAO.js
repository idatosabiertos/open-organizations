const config = require("../../config");
const mysql = require('nodejs-mysql').default;
const db = mysql.getInstance(config.getConnection());

function add (organization) {
    db.exec('insert into organizations set ?', {
        name: organization.name,
        latitude: organization.latitude,
        longitude: organization.longitude,
        country: organization.country
    }).then(rows => {
    }).catch(e => {
        console.log("ERROR MYSQL",organization.name);
    });
}

exports.add = add