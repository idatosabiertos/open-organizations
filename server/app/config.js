const connection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: `ilda.organizations`
}

function getConnection (organization) {
   return connection;
}


exports.getConnection = getConnection;