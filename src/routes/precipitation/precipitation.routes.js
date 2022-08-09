import { Router } from 'express';
// import {
// getAllPrecipitationByCell,
// getAllPrecipitation,
// addPrecipitation
// editPrecipitation
// } from "./precipitaion.controller.js"

import {
    getPrecipitationByCell,
    getAllPrecipitation
} from "../../controllers/precipitaion.controller.js"

const precipitationRouter = Router();

precipitationRouter.get('/', getAllPrecipitation); 
precipitationRouter.get('/:cell', getPrecipitationByCell)
// precipitationRouter.post('/:cell',savePrecipitationData)
// precipitationRouter.put()
// precipitationRouter.delete()

export default precipitationRouter;