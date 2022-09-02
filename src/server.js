import { createServer } from "http";
import app from "./app.js";
import elevation from "./models/Elevation.js";
import flood from "./models/Flood.js";
import rainfall from "./models/RainFall.js";
import soiltype from "./models/SoilType.js";
import user from "./models/User.js";
import landslides from "./models/LandSlide.js";
const PORT = process.env.PORT || 8000;
const server = createServer(app);
async function startServer() {
  server.listen(PORT, async () => {
    await elevation.sync({ alter: true });
    await flood.sync({ alter: true });
    await rainfall.sync({ alter: true });
    await soiltype.sync({ alter: true });
    await user.sync({ alter: true });
    await landslides.sync({ alter: true });
    console.log(`Listening on port  ${PORT}....`);
  });
}
startServer();
