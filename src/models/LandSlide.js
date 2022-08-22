import Sequelize from "sequelize"
import sequelize from "../databaseConfig/connection.js"
import pool from '../databaseConfig/connectionPool.js'


sequelize.define(
    'LandSlide', {
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
        alert: {
            type: Sequelize.STRING(300),
            allowNull: false
        },
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
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    }
)

function selectAllLandSlidesAlert() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM Landslides`, function (err, result) {
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

function deleteAlertFromTableById(alertId) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`DELETE FROM Landslides WHERE id = ${alertId}`, function (err, result) {
                if (err || result.length === 0) {
                    return reject(err)
                }
                return resolve(`The alert  with id : ${alertId} was deleted`)
            });
        } catch (e) {
            reject(e)
        }
    })
};

function addOccuredLandSlide(landSlide) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`INSERT INTO Landslides SET ?`, landSlide, function (err, result) {
                if (err) {
                    return reject(err)
                }
                return resolve(`Landslide data you added was recorded to our database.Thank you
                    for your contribution`)
            });
        } catch (err) {
            reject(err)
        }
    })
}

export {
    sequelize,
    selectAllLandSlidesAlert,
    deleteAlertFromTableById,
    addOccuredLandSlide
}