import { Router } from "express";
import getWelcomeMessage from "../controllers/welcomeMessage.controller";

const homeRouter = Router(); 
homeRouter.get("/", getWelcomeMessage)
export default homeRouter; 