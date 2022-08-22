'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable(
      'users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        phoneNumber: {
            type: Sequelize.STRING(20),
            allowNull: false,
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
        password: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        timestamps:true, 
    }
    )
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("users");
  }
};
