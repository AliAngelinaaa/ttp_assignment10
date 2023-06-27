
const { Pool } = require("pg");
const pswd = require('../trauma');


const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "assignment10",
    user: "postgres",
    password: pswd,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
};
