"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("soils", {
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
      soilType: {
        type: Sequelize.ENUM(
          "SAND",
          "CLAY",
          "SILTY",
          "PEATY",
          "CHALKY",
          "LOAMY"
        ),
        allowNull: false,
      },
      soilLongitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      soilLatitude: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("soils");
  },
};
