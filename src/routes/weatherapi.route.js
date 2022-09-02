import Router from "express";
import getWeatherByLocation from "../controllers/locationWeather.controller.js"
const weatherRouter = Router();

/** Weather-Data-Swagger-SCHEMA-START*/
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      Weather:
 *        type: object
 *        properties:
 *          coord:
 *            type: object
 *            description: provide area coordinates
 *          weather:
 *            type: object
 *            description : provide area weather conditions
 *          base:
 *            type: string
 *            description: provide the type of weather collection
 *          main:
 *            type: object
 *            description: provide temperature and humidity
 *          visibility:
 *            type: integer
 *            description: provide how fall you can see
 *          wind:
 *            type: object
 *            description: provide the speed of the wind
 *          rain:
 *            type: object
 *            description: provide prospect of rain in the area
 *          clouds:
 *            type: object
 *            description: provide the state of the cloud in the area
 */
/** Weather-Data-Swagger-SCHEMA-END*/

/**Get-WeatherData-By-district-START*/
/**
 * @swagger
 * /weather/searchbylocation/{district}:
 *  get:
 *    summary: returns weather data by district or city
 *    tags:
 *      - Current_weather
 *    parameters:
 *      - in: path
 *        name: district
 *        schema:
 *          type: string
 *    content:
 *      application/json:
 *        schema:
 *    responses:
 *       '200':
 *          description: weather data found successfully
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
 weatherRouter.get("/searchbylocation/:district",getWeatherByLocation);
 /**Get-WeatherData-By-district-END*/
export default weatherRouter;
