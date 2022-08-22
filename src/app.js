import express, { json } from 'express';
import precipitationRouter from "./routes/precipitation.routes.js";
import cors from 'cors';
import userRouter from './routes/user.route.js';
import elevationRouter from './routes/elevation.route.js'


const app = express();
// babel(ES6 TO ES5) LOOK INTO BUILD FOR DEPLOYMENT 
// Add sequelize-cli to dependencies
// test with jest
// socket.io(LOOK INTO THIS) real time notification
// Uber(how do they get their location)
// google geocode to search someone's location
// middlewares
app.use(cors({
    // this means that allow only the request from 3000 request clients
    origin: 'http://localhost:3000'
}));
app.use(json());
// add morgan middlewares



// routes
app.use('/rainfall', precipitationRouter);
app.use('/users', userRouter)
app.use('/elevation',elevationRouter )
export default app;