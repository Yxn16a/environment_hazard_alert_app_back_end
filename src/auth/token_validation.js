import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export default function checkToken(req, res, next) {
  let token = req.get("Authorization");
  if (!token)
    return res.status(401).json({
      success: 0,
      message: "Access denied",
    });
  /**split the token and take the second parameter which is the token created */
  token = token.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(403).json({
          success: 0,
          message: "Invalide token: access denied",
        });
      } else {
        // if everything is good,move on
        next();
      }
    });
  } else {
    res.status(404).json({
      success: 0,
      message: "Access denied unauthorized user",
    });
  }
}
