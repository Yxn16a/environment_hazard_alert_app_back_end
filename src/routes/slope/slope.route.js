import { Router } from 'express'; 
import { httpGetAllSlopData }  from './slope.controller.js';
const slopeRouter = Router();
slopeRouter.get('/',  httpGetAllSlopData); 
export default slopeRouter;