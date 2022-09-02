import { Router } from "express";
import {
  getAllElevationData,
  addElevation,
  getElevationByLocation,
} from "../controllers/elevation.js";
import checkToken from "../auth/token_validation.js";
const elevationRouter = Router();
elevationRouter.get("/", checkToken, getAllElevationData);
elevationRouter.get("/:village", checkToken, getElevationByLocation);
elevationRouter.post("/", checkToken, addElevation);
export default elevationRouter;
