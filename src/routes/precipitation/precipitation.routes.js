import { Router } from 'express'; 
import { httpGetPrecipitationByCell,
         httpGetAllPrecipitation
} from "./precipitaion.controller.js"

const precipitationRouter = Router();
precipitationRouter.get('/', httpGetAllPrecipitation); 
precipitationRouter.get('/:cell',httpGetPrecipitationByCell)
export default precipitationRouter;