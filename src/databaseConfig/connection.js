import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(process.env.PG_DATABASE_URL,{
  dialect: "postgres",
  operatorsAliases: false,
});
export default sequelize;
