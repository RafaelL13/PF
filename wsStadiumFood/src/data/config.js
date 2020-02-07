const pool = require('mssql');

// Set database connection credentials
const config = {    
    user: 'Admin',
    password: 'Toor13',
    database: 'estadiumfood',
    server: '192.168.0.12'
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