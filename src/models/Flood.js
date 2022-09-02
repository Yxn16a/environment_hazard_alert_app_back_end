import Sequelize from "sequelize";
import sequelize from "../databaseConfig/connection.js";

export default sequelize.define("Flood", {
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
  waterBodyName: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  waterBodyType: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  /** Future possible properties -START */

  // waterBodyNormalwaterLevels: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  //   },
  // rainAmount: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  //   },
  // waterBodyLevelAfterRain: {
  // type: Sequelize.INTEGER(11),
  // allowNull: false,
  // },
  // waterBodyLongitude: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  // },
  // waterBodyLatitude: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  // },
  
  /** Future possible properties -END */

  floodAlert: {
    type: Sequelize.STRING(300),
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
