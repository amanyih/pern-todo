const Pool = require("pg").Pool;

user = process.env.USER || "postgres";
password = "postsqlgre";
host = process.env.HOST || "localhost";
database = process.env.DATABASE || "perntodo";
port = process.env.PORT || 5432;

const pool = new Pool({
  user,
  password,
  host,
  database,
  port,
});

module.exports = pool;
