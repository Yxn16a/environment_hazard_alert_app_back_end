import { Router } from "express";
import {
  getAllRainFallData,
  addRainData,
} from "../controllers/rainfall.controller.js";
import checkToken from "../auth/token_validation.js";

const precipitationRouter = Router();

precipitationRouter.get("/", checkToken, getAllRainFallData);
precipitationRouter.post("/", checkToken, addRainData);
export default precipitationRouter;
