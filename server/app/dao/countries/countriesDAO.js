const config = require("../../config");
var mysql = require('mysql');
var pool = mysql.createPool(config.getConnection());

function get(active, callback) {
    pool.query('select * from `countries` where `active` = ?', [active], callback);
}

exports.get = get;