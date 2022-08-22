import { createServer } from 'http';
import  app  from './app.js';
import sequelize from './databaseConfig/connection.js'
const PORT = process.env.PORT || 8000;
const server = createServer(app);
async function startServer() {
    server.listen(PORT, async() => {
        await sequelize.sync({Alter:true})
        console.log(`Listening on port  ${PORT}....`)
    })
}
startServer();