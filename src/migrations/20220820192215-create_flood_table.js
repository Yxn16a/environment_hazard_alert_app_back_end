"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("floods", {
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

      waterBodyName: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      waterBodyType: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      waterBodyNormalwaterLevels: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      rainAmount: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      waterBodyLevelAfterRain: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      waterBodyLongitude: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      waterBodyLatitude: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },

      floodAlert: {
        type: Sequelize.STRING(300),
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("flodds");
  },
};
