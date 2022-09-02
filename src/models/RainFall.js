import Sequelize from "sequelize";
import sequelize from "../databaseConfig/connection.js";

export default sequelize.define("Rain", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  province: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  district: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  sector: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  cell: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  cell: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  village: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  rainAmount: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
  },
  heavyrainalert: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
  createdAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },
  updatedAt: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
});
