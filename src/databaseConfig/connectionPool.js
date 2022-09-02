import { createPool } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = createPool({
  host: process.env.PG_DATABASE_HOST,
  user: process.env.PG_DATABASE_USER,
  password: process.env.PG_DATABASE_PASSWORD,
  database: process.env.PG_DATABASE,
  connectionLimit: 10,
});

export default pool;
