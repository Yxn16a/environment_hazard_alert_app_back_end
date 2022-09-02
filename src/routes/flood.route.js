import { Router } from "express";
import {
  getAllFloods,
  postFloodAlert,
  updateFloodAlert,
} from "../controllers/flood.controller.js";
import checkToken from "../auth/token_validation.js";
const floodRouter = Router();

/**Flood-Swagger- SCHEMA-START*/
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Flood:
 *        type: object
 *        required:
 *          - province
 *          - district
 *          - sector
 *          - cell
 *          - waterBodyName
 *          - waterBodyType
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
 *          waterBodyName:
 *            type: string
 *            description: state the name of the water body where flood happened
 *          waterBodyType:
 *            type: string
 *            description: what type of this water body
 *          floodAlert:
 *            type: string
 *            description: describe what happened
 *        example:
 *          id: 1
 *          province: North
 *          district: Musanze
 *          sector: Muhoza
 *          cell: Mpenge
 *          waterBodyName: Mukungwa
 *          waterBodyType: river
 *          floodAlert: mukungwa flooded near its bridge on Kigali Musanze road
 */
/**Flood-Swagger-SCHEMA-END*/

/**Add-Land-Slide-START*/
/**
 * @swagger
 * /flood/location:
 *   post:
 *       security:
 *        - bearerAuth: []
 *       summary: create a flood alert as it happened
 *       tags:
 *        - Floods
 *       requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                $ref: '#components/securitySchemes/schemas/Flood'
 *       responses:
 *          '200':
 *              description: flood alert was added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
 floodRouter.post("/location", checkToken, postFloodAlert);
 /**Add-Land-Slide-END*/

 /**GetAll-Floodsalert-START*/
/**
 * @swagger
 * /flood/location:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: returns the list of all flood alert
 *    tags:
 *      - Floods
 *    content:
 *      application/json:
 *        schema:
 *          $ref:'#components/securitySchemes/schemas/Flood'
 *    responses:
 *       '200':
 *          description: all flood alert were found
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
 floodRouter.get("/location", checkToken, getAllFloods);
 /**GetAll-Floodsalert-END*/
 
/**Update-Floodsalert-START*/
/**
 * @swagger
 * /flood/location:
 *  put:
 *       security:
 *         - bearerAuth: []
 *       summary: update flood alert data
 *       tags:
 *        - Floods
 *       requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                $ref: '#components/securitySchemes/schemas/Flood'
 *       responses:
 *          '200':
 *              description: flood data was successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
 floodRouter.put("/location", checkToken, updateFloodAlert);
 /**Update-Floodsalert-END*/

export default floodRouter;
