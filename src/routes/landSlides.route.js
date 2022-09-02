import { Router } from "express";
import {
  getAllLandSlidesAlert,
  deleteAlertById,
  postaLandSlide,
} from "../controllers/landslide.controller.js";
import checkToken from "../auth/token_validation.js";
const landSlidesRouter = Router();

/** Landslide-Swagger- SCHEMA-START*/
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Landslide:
 *        type: object
 *        required:
 *          - province
 *          - district
 *          - sector
 *          - cell
 *          - alert
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the User
 *          province:
 *            type: string
 *            description : landslide province
 *          district:
 *            type: string
 *            description: the district where the landslide happened
 *          sector:
 *            type: string
 *            description: the sector where land slides happened
 *          cell:
 *            type: string
 *            description: cell where the land slides happened
 *          alert:
 *            type: string
 *            description: describe the landslide and where it is located
 *        example:
 *          id: 1
 *          province: North
 *          district: Musanze
 *          sector: Muhoza
 *          cell: Mpenge
 *          alert: landslide happened in Mpenge cell near the road to the volcanoes
 */
/**Landslide-Swagger-SCHEMA-END*/

/**GetAll-Landslides-START*/
/**
 * @swagger
 * /landslide/location:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: returns the list of all landslides
 *    tags:
 *      - Landslides
 *    content:
 *      application/json:
 *        schema:
 *          $ref:'#components/securitySchemes/schemas/Landslide'
 *    responses:
 *       '200':
 *          description: all location found successfully
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
landSlidesRouter.get("/location", checkToken, getAllLandSlidesAlert);
/**GetAll-Landslides-END*/

/**Add-Land-Slide-START*/
/**
 * @swagger
 * /landslide/location:
 *   post:
 *       summary: create a landslide as it happened
 *       security:
 *        - bearerAuth: []
 *       tags:
 *        - Landslides
 *       requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                $ref: '#components/securitySchemes/schemas/Landslide'
 *       responses:
 *          '200':
 *              description: land slide alert was added
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
landSlidesRouter.post("/location", checkToken, postaLandSlide);
/**Add-Land-Slide-END*/

/**Delete landSlideByLocation-START*/
/**
 * @swagger
 * /landslide/location/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete landSlide by id or location
 *    tags:
 *      - Landslides
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *    content:
 *      application/json:
 *        schema:
 *          $ref:  '#components/securitySchemes/schemas/Landslide'
 *    responses:
 *       '200':
 *          description: landslide with id or from location was deleted
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
landSlidesRouter.delete("/location/:id", checkToken, deleteAlertById);
/**Delete landSlideByLocation-END*/
export default landSlidesRouter;
