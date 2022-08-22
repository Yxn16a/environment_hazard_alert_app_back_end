'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable(
      'landSlides', {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
        elevation: {
          type: Sequelize.DataTypes.INTEGER(11),
        },
        rainQuantity: {
          type: Sequelize.DataTypes.INTEGER(11),
          allowNull: false
        },
        SoilType: {
          type: Sequelize.ENUM("SAND","CLAY","SILTY","PEATY","CHALKY","LOAMY"),
          allowNull: false,
        },
        roadLongitude: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        roadLatitude: {
          type: Sequelize.INTEGER(11),
          allowNull: false, 
        },
        distanceToRoad: {
            type: Sequelize.INTEGER(11),
        },
        riverLatitude: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
        },
        riverLongitude: {
          type: Sequelize.INTEGER(11),
          allowNull: false, 
        },
        distanceToRiver: {
          type: Sequelize.INTEGER(11),
          allowNull: false,  
        },
        timestamps:true
    }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("landSlides");
  }
};
