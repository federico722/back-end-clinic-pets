import mysql from 'mysql2/promise';
import dotenv from "dotenv";
import fs from "fs"
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10): undefined, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0

});

(async () => {
    try {
      const connection = await db.getConnection();
      console.log("Connected to the database successfully!");
      connection.release();
    } catch (err) {
      console.error("Unable to connect to the database:", err);
    }
  })();

export default db