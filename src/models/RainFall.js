import Sequelize from "sequelize"
import sequelize from "../databaseConfig/connection.js"

sequelize.define(
    'Rain', {
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
        rainAmount: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
        },
        heavyrainalert: {
            type: Sequelize.STRING(300),
            allowNull: false,
        },
        createdAt : Sequelize.DATE, 
        updatedAt : Sequelize.DATE, 
    } 
)

function seletAllRainFallData() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM rains`, function (err, result) {
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
// function selectRainfallDataByCell(cell) { 
//     return new Promise((resolve, reject) => {
//         try {
//             pool.query(`SELECT * FROM rains where location=?`,cell, function (err, result) {
//                 if (err || result.length === 0) {
//                     return reject(err)
//                 }
//                 return resolve(result);
//             });
//         } catch (err) {
//             reject(err)
//         }
//     })
// }
function addRainfallData(rains) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`INSERT INTO Elevation SET ?`, elevationData, function (err, result) {
                if (err || result.length === 0) {
                    return reject(err)
                }
                return resolve(`The Rainfall alert with id : ${rains.id} was created`)
            });
        } catch (err) {
            reject(err)
        }
    })
};

export {
    sequelize,
    seletAllRainFallData,
    addRainfallData
}

