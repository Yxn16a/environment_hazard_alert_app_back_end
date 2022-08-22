import Sequelize from "sequelize"
import sequelize from "../databaseConfig/connection.js"
import pool from '../databaseConfig/connectionPool.js'

sequelize.define(
  'Flood', {
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

    waterBodyName: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    waterBodyType: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    // waterBodyNormalwaterLevels: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   },
    // rainAmount: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    //   },
    // waterBodyLevelAfterRain: {
    // type: Sequelize.INTEGER(11),
    // allowNull: false,
    // },
    // waterBodyLongitude: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    // },
    // waterBodyLatitude: {
    //   type: Sequelize.INTEGER(11),
    //   allowNull: false,
    // },

    floodAlert: {
      type: Sequelize.STRING(300),
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  }
)

function selectAllFloods() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`SELECT * FROM Floods`, function (err, result) {
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

function addFloodsAlert(alert) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`INSERT INTO  Floods SET ?`, alert, function (err, result) {
        if (err || result.length === 0) {
          return reject(err)
        }
        return resolve(`The user with id : ${alert.id} was created`)
      });
    } catch (err) {
      reject(err)
    }
  })
};

function updateUseFloodsData(flood) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`UPDATE Floods SET province = ?, district = ?, sector   = ?, cell= ?, waterBodyName = ?, 
            waterBodyType=?,floodAlert=?, createdAt =?,updatedAt=?, Where id= ?`,
        [flood.province, flood.district, flood.sector, flood.cell,
          flood.waterBodyName, flood.waterBodyType, flood.floodAlert,
          flood.createdAt, flood.updatedAt, flood.id
        ],
        function (err, result) {
          if (err || result.length === 0) {
            return reject(err)
          }
          return resolve(`The flood alert with id : ${flood.id} was updated`)
        });
    } catch (e) {
      reject(e)
    }
  })
};

export {
  sequelize,
  selectAllFloods,
  addFloodsAlert,
  updateUseFloodsData
}