const Pool = require("pg").Pool;
const pool = new Pool({
    user:"postgres",
    password: "987456321",
    host: "localhost",
    port: 5432,
    database: "todolistall"
});
module.exports = pool;