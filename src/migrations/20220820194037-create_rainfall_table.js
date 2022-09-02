"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("rains", {
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
      rainAmount: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      heavyrainalert: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("rains");
  },
};
