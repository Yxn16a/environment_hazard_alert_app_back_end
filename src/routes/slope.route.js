import { Router } from 'express'; 
import { httpGetAllSlopData ,slopeByCell}  from '../controllers/slope.controller.js';
const slopeRouter = Router();
slopeRouter.get('/', httpGetAllSlopData); 
slopeRouter.get('/:cell', slopeByCell)
export default slopeRouter;