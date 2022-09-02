import { createPool } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10,
});

export default pool;
