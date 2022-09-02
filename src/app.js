import express, { json } from "express";
import precipitationRouter from "./routes/precipitation.route.js";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import elevationRouter from "./routes/elevation.route.js";
import floodRouter from "./routes/flood.route.js";
import landSlidesRouter from "./routes/landSlides.route.js";
import weatherRouter from "./routes/weatherapi.route.js";
import soilRouter from "./routes/soil.route.js";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();

/**Work to be done -START */

// babel(ES6 TO ES5) LOOK INTO BUILD FOR DEPLOYMENT
// Add sequelize-cli to dependencies
// test with jest***
// socket.io(LOOK INTO THIS) real time notification***
// Uber(how do they get their location)
// google geocode to search someone's location
// middlewares

// create event: on click on a map, then pull the data from the map
// then what you can will be to compare the data
//LEARN HOW DO TO API DOCUMENTATION
// HOST IT ON HEROKU
// USE SWAGA FOR API DOCUMENTATION CREATION
// get extension(then we can give you the work)

/**Work to be done -END */

app.use(
  cors({
    /** allow request from 3000 only */
    origin: "http://localhost:3000",
  })
);
app.use(json());

/** use morgan for api log */
app.use(morgan("tiny"));

/**Swagger initialization -START */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "rsaapp",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
    securityDefinitions: {
      bearerAuth: {
        type: "bearerToken",
        name: "Authorization",
        scheme: "bearer",
        in: "header",
      },
    },
  },
  apis: ["./src/routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
app.get("/swagger.json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/** swagger initialization -END */

/**routes*/
app.use("/users", userRouter);
app.use("/rainfall", precipitationRouter);
app.use("/elevation", elevationRouter);
app.use("/flood", floodRouter);
app.use("/landslide", landSlidesRouter);
app.use("/soil", soilRouter);
app.use("/weather", weatherRouter)
export default app;
