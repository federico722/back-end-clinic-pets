import mysql from 'mysql2/promise';
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    //user:"root",
    user: process.env.DB_USER,
    port: 3307, 
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