const pool = require('mssql');

// Set database connection credentials
const config = {    
    user: 'RootRL',
    password: 'Toor13',
    database: 'PagoFacil',
    server: '127.0.0.1',
};

// Create a Sql pool
//const pool = new mssql.ConnectionPool(config).connect();
const poolPromise = new pool.ConnectionPool(config).connect().then(pool => {
    console.log('Connected to MSSQL')
    return pool
  }).catch(err => console.log('Database Connection Failed! Bad Config: ', err))

  module.exports = {
  pool, poolPromise
}