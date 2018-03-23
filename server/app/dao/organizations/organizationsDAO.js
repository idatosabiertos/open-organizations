const db = require("../database");
var pool = db.getPool();

function add(organization, callback) {
    pool.query('INSERT into organizations SET ?', organization, callback);
}

function get(country, callback) {
    pool.query('select * from `organizations` where `country` = ?', [country], callback);
}

exports.add = add;
exports.get = get;
