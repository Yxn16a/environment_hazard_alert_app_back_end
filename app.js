import express, { json } from 'express';
import precipitationRouter from "./src/routes/precipitation/precipitation.routes.js";
import  slopeRouter  from "./src/routes/slope/slope.route.js";
import cors from 'cors';

const app = express();
app.use(cors({
    // this means that allow only the request from 3000 request clients
    origin: 'http://localhost:3000'
}));
app.use(json());
app.use('/precipitation',precipitationRouter);
app.use('/slope',slopeRouter);

export default app;
