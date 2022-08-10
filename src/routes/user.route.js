import {
    getAllUsers,
    getUserById,
    deleteUserById,
    postUser,
    updateUser,
    getUserLocation
} from "../controllers/user.controller.js";
import {
    Router
} from 'express';
import {
    getSoilTypeByLocation
} from '../controllers/soiltype.controllers.js';

import {
    getAllLandSlidesAlert,
    deleteAlertById,
    postaLandSlide
} from '../controllers/landslide.controller.js'


const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserById)
userRouter.post('/', postUser)
userRouter.put('/', updateUser)
userRouter.get('/user/location', getUserLocation)
userRouter.get('/location/soil', getSoilTypeByLocation)
userRouter.get('/location/landslide', getAllLandSlidesAlert)
userRouter.delete('/location/landslide/:id', deleteAlertById)
userRouter.post('/location/landslide',postaLandSlide)

export default userRouter;