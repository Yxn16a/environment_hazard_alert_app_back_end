import {
  getAllUsers,
  getUserById,
  deleteUserById,
  register,
  updateUser,
  getUserLocation,
  login,
  getClosedAccount
} from "../controllers/user.controller.js";
import { Router } from "express";
import checkToken from "../auth/token_validation.js";
const userRouter = Router();

/** User-Swagger- SCHEMA-START*/
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - firstName
 *          - lastName
 *          - phoneNumber
 *          - password
 *          - passwordConfirm
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the User
 *          firstName:
 *            type: string
 *            description : the user first name
 *          lastName:
 *            type: string
 *            description: the user last name
 *          phoneNumber:
 *            type: string
 *            description: the user phone number
 *          password:
 *            type: string
 *            description: password encripted
 *          passwordConfirm:
 *            type: string
 *            description: confirmpassword
 *          userLongitude:
 *            type: integer
 *            description: grab user longitude from his or her consent
 *          userLatitude:
 *            type: integer
 *            description: grab user latitude from his or her consent
 *          createdAt:
 *            type: date
 *            description: api logic creates this according to local time of user
 *          updatedAt:
 *            type: date
 *            description: api logic creates this according to local time user
 *
 *        example:
 *          firstName: Yves
 *          lastName: Ngenzi
 *          phoneNumber: 0791166123 must be ten numbers
 *          password: 1234!@yN must be 8 characters
 *          passwordConfirm: incliptedpassword
 */
/** User-Swagger-SCHEMA-END*/

/** User-Login Schema-START*/
/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *    schemas:
 *      UserLogin:
 *        type: object
 *        required:
 *          - phoneNumber
 *          - password
 *        properties:
 *          phoneNumber:
 *            type: string
 *            description: the user phone number
 *          password:
 *            type: string
 *            description: should do be at least 8 characters
 *        example:
 *          phoneNumber: 0791166123 number is a string
 *          password: 1234!@#$
 */
/**User-Login Schema-END*/

/** Register a user-START*/
/**
 * @swagger
 * /users/register:
 *   post:
 *       summary: create a user
 *       tags:
 *         - User
 *       requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                $ref: '#components/securitySchemes/schemas/User'
 *       responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
userRouter.post("/register", register);
/** Register a user-END*/

/**Userlogin-START*/
/**
 * @swagger
 * /users/login:
 *   post:
 *       summary: logins in the user
 *       tags:
 *         - User
 *       requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                $ref: '#components/securitySchemes/schemas/UserLogin'
 *       responses:
 *          '200':
 *              description: user login in successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
userRouter.post("/login", login);
/**Userlogin-END*/

/**GetAll-Users-START*/
/**
 * @swagger
 * /users:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: returns the list of all the users
 *    tags:
 *      - User
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#components/securitySchemes/schemas/User'
 *    responses:
 *       '200':
 *          description: all users found successfully
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
userRouter.get("/", getAllUsers);
/**GetAll-Users-END*/

/**GetUserByPhoneNumber-START*/
/**
 * @swagger
 * /users/{phoneNumber}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: returns return user by phone Number
 *    tags:
 *      - User
 *    parameters:
 *      - in: path
 *        name: phoneNumber
 *        schema:
 *          type: string
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#components/securitySchemes/schemas/User'
 *    responses:
 *       '200':
 *          description: a user with phone number was found
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
userRouter.get("/:phoneNumber", checkToken, getUserById);
/**GetUserByPhoneNumber-END*/

/**DeleteUserByPhoneNumber-START*/
/**
 * @swagger
 * /users/{phoneNumber}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: delete user by phoneNumber
 *    tags:
 *      - User
 *    parameters:
 *      - in: path
 *        name: phoneNumber
 *        schema:
 *          type: string
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#components/securitySchemes/schemas/User'
 *    responses:
 *       '200':
 *          description: user with given phoneNumber was deleted
 *       '500':
 *          description: Internal server error
 *       '400':
 *          description: Bad request
 */
userRouter.delete("/:phoneNumber", deleteUserById);
/**DeleteUserByPhoneNumber-END*/

/**UpdateUser-START*/
/**
 * @swagger
 * /users/update:
 *  put:
 *       security:
 *         - bearerAuth: []
 *       summary: update a user
 *       tags:
 *        - User
 *       requestBody:
 *        required: true
 *        content:
 *            application/json:
 *              schema:
 *                $ref: '#components/securitySchemes/schemas/User'
 *       responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
userRouter.put("/update", updateUser);
/**UpdateUser-END*/
userRouter.get("/accounts/closed", getClosedAccount)

userRouter.get("/user/location", checkToken, getUserLocation);


export default userRouter;
