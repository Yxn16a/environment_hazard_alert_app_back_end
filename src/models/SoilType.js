import Sequelize from "sequelize"
import sequelize from "../databaseConfig/connection.js"

sequelize.define(
    'SoilType', {
        id: {
          type: Sequelize.INTEGER,
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
        cell: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        soilType: {
          type: Sequelize.ENUM("SAND","CLAY","SILTY","PEATY","CHALKY","LOAMY"),
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
      }
)

function selectSoilTypeByUserLocation() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM soiltype`, function (err, result) {
                if (err || result.length === 0) {
                    return reject(err)
                }
                return resolve(result)
            });
        } catch (e) {
            reject(e)
        }
    })
};

export { 
    sequelize,
    selectSoilTypeByUserLocation
}