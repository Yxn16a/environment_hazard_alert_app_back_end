import { Router } from "express"
const soilRouter = Router()
import { getSoilTypeByLocation } from "../controllers/soiltype.controllers.js";
import checkToken from "../auth/token_validation.js";

/**Soil-Swagger- SCHEMA-START*/
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      SoilType:
 *        type: object
 *        required:
 *          - province
 *          - district
 *          - sector
 *          - cell
 *          - village
 *          - soilType
 *          - soilLongitude 
 *          - soilLatitude
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the User
 *          province:
 *            type: string
 *            description : user province
 *          district:
 *            type: string
 *            description: user district
 *          sector:
 *            type: string
 *            description:  user sector
 *          cell:
 *            type: string
 *            description:  user cell
 *          soilType:
 *            type: string
 *            description:  soil type of a location 
 *          soilLongitude:
 *            type: integer
 *            description:  user location on a  map 
 *          soilLatitude:
 *            type: integer
 *            description:  user location on a map
 *        example:
 *          id: 1
 *          province: North
 *          district: Musanze
 *          sector: Muhoza
 *          cell: Mpenge
 *          village: gakindo
 *          soilType: sand
 *          soilLongitude: SAND
 *          soilLatitude: sand
 */
/**Soil-Swagger-SCHEMA-END*/

/**Get-SoilTypeByLocation-START*/
/**
 * @swagger
 * /soil/location:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: returns soil type by village
 *    tags:
 *      - Soil
 *    content:
 *      application/json:
 *        schema:
 *          $ref:'#components/securitySchemes/schemas/Soil'
 *    responses:
 *       '200':
 *          description: location found successfully
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
 soilRouter.get("/location", checkToken, getSoilTypeByLocation);
/**Get-SoilTypeByLocation-END*/

export default soilRouter