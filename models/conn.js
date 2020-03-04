'use strict'

const options = {
    host: 'localhost',
    database: 'products'
}



const pgp = require('pg-promise')({
    query: e => {
    console.log('QUERY', e.query);
    }
});

const db = pgp(options);


module.exports = db;