import Sequelize from "sequelize"
import sequelize from "../databaseConfig/connection.js"
import pool from '../databaseConfig/connectionPool.js'

sequelize.define(
    'Elevation', {
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
        cell: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        elevation: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    }
)

function seletElevationData() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM Elevations`, function (err, result) {
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
// TODO CHECK WHICH LOCATION YOU ARE TALKING ABOUT
function selectDataByLocation(location_id) { 
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM Elevations where id=${location_id}`, function (err, result) {
                if (err || result.length === 0) {
                    return reject(err)
                }
                return resolve(result)
            });
        } catch (err) {
            reject(err)
        }
    })
}
function addElevationData(elevationData) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`INSERT INTO Elevations SET ?`, elevationData, function (err, result) {
                if (err || result.length === 0) {
                    return reject(err)
                }
                return resolve(`The Elevation with id : ${elevationData.id} was created`)
            });
        } catch (err) {
            reject(err)
        }
    })
};

export {
    sequelize,
    seletElevationData,
    addElevationData,
    selectDataByLocation
}