import pool from "../databaseConfig/connectionPool.js";

function selectAllFloods() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`SELECT * FROM Floods`, function (err, result) {
        if (err || result.length === 0) {
          return reject(err);
        }
        return resolve(result);
      });
    } catch (e) {
      reject(e);
    }
  });
}

function addFloodsAlert(alert) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`INSERT INTO  Floods SET ?`, alert, function (err, result) {
        if (err || result.length === 0) {
          return reject(err);
        }
        return resolve(`The user with id : ${alert.id} was created`);
      });
    } catch (err) {
      reject(err);
    }
  });
}

function updateUseFloodsData(flood) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `UPDATE Floods SET province = ?, district = ?, sector   = ?, cell= ?, waterBodyName = ?, 
              waterBodyType=?,floodAlert=?, createdAt =?,updatedAt=?, Where id= ?`,
        [
          flood.province,
          flood.district,
          flood.sector,
          flood.cell,
          flood.waterBodyName,
          flood.waterBodyType,
          flood.floodAlert,
          flood.createdAt,
          flood.updatedAt,
          flood.id,
        ],
        function (err, result) {
          if (err || result.length === 0) {
            return reject(err);
          }
          return resolve(`The flood alert with id : ${flood.id} was updated`);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}

export { selectAllFloods, addFloodsAlert, updateUseFloodsData };
