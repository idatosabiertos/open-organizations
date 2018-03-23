var mysql = require('mysql');
const config = require("../config");
var pool;
module.exports = {
    getPool: function () {
        if (pool) return pool;
        pool = mysql.createPool(config.getConnection());
        return pool;
    }
};