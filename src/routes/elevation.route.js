import {Router} from 'express';
import {
    getAllElevationData,
    addElevation,
    getElevationByLocation
} from '../controllers/elevation.js';
const elevationRouter = Router();
elevationRouter.get('/', getAllElevationData);
elevationRouter.get('/:id', getElevationByLocation)
elevationRouter.post('/',addElevation)
export default elevationRouter;