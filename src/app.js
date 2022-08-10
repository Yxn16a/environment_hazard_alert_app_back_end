import express, {
    json
} from 'express';
import precipitationRouter from "./routes/precipitation.routes.js";
import slopeRouter from "./routes/slope.route.js";
import cors from 'cors';
import userRouter from './routes/user.route.js';

const app = express();

// middlewares
app.use(cors({
    // this means that allow only the request from 3000 request clients
    origin: 'http://localhost:3000'
}));
app.use(json());
// add morgan middlewares

// routes
app.use('/rainfall', precipitationRouter);
app.use('/elevation', slopeRouter);
app.use('/users', userRouter)
export default app;
