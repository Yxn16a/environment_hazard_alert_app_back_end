"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("elevations", {
      id: {
        type: Sequelize.INTEGER(11),
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
      elevation: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      createdAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("elevations");
  },
};
