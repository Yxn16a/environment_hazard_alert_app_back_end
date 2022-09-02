import Sequelize from "sequelize";
import sequelize from "../databaseConfig/connection.js";

export default sequelize.define("LandSlide", {
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
  village: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  alert: {
    type: Sequelize.STRING(300),
    allowNull: false,
  },
  /** Future possible properties -START */

  // elevation: {
  //   type: Sequelize.DataTypes.INTEGER(11),
  // },
  // rainQuantity: {
  //   type: Sequelize.DataTypes.INTEGER(11),
  //   allowNull: false
  // },
  // SoilType: {
  //   type: Sequelize.ENUM("SAND","CLAY","SILTY","PEATY","CHALKY","LOAMY"),
  //   allowNull: false,
  // },
  // roadLongitude: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  // },
  // roadLatitude: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  // },
  // distanceToRoad: {
  //     type: Sequelize.INTEGER(11),
  // },
  // riverLatitude: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  // },
  // riverLongitude: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  // },
  // distanceToRiver: {
  //   type: Sequelize.INTEGER(11),
  //   allowNull: false,
  // },

  /** Future possible properties -END */
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
