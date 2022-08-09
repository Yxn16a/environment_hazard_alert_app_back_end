
import { getAllUsers, getUserById,deleteUserById,postUser, updateUser} from "../../controllers/user.controller.js";
import { Router } from 'express'; 
const userRouter = Router();

userRouter.get('/', getAllUsers); 
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserById)
userRouter.post('/', postUser)
userRouter.put('/',updateUser)
export default userRouter;

