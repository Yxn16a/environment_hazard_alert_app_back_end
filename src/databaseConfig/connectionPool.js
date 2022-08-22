import { createPool } from 'mysql2'

const pool =createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ihavedream1!',
    database: 'rsaapp',
    connectionLimit:10
})

export default pool;