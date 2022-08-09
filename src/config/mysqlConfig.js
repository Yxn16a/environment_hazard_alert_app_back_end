import { createPool } from 'mysql2'

export const pool =createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ihavedream1!',
    database: 'nodejs',
    connectionLimit:10
})