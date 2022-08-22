import { Router } from 'express';
import {
    getAllRainFallData,
    addRainData
} from "../controllers/rainfall.controller.js"

const precipitationRouter = Router();

precipitationRouter.get('/',  getAllRainFallData); 
precipitationRouter.post('/', addRainData)
export default precipitationRouter;