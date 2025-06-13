const mysql = require("mysql2");
require("dotenv").config();
export const mysqlpool = mysql.createConnection(
  process.env.NEXT_PUBLIC_Database_url
);
