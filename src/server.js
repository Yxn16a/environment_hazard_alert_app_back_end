import { createServer } from 'http';
import  app  from './app.js';
import { loadPrecipitationData } from './models/precipitatation.model.js';
import { loadSlopData } from './models/slope.model.js';
const PORT = process.env.PORT || 8000;
const server = createServer(app);
async function startServer() {
    await loadSlopData(); 
    await loadPrecipitationData();
    server.listen(PORT, () => {
        console.log(`Listening on port  ${PORT}....`)
    })
}
startServer();