import mysql from "mysql2";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ilovegames@2001",
  database: "blog",
});
