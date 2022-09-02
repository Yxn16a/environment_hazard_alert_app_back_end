import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
  process.env.PG_DATABASE_HOST,
  process.env.PG_DATABASE_USER,
  process.env.PG_DATABASE_PASSWORD, {
  host: process.env.PG_DATABASE_HOST,
  dialect: "postgres",
  operatorsAliases: false,
});
export default sequelize;
