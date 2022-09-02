import pool from "../databaseConfig/connectionPool.js";

function seletAllRainFallData() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`SELECT * FROM rains`, function (err, result) {
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
      pool.query(
        `INSERT INTO Elevation SET ?`,
        elevationData,
        function (err, result) {
          if (err || result.length === 0) {
            return reject(err);
          }
          return resolve(
            `The Rainfall alert with id : ${rains.id} was created`
          );
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

export { seletAllRainFallData, addRainfallData };
