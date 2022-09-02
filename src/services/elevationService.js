import pool from "../databaseConfig/connectionPool.js";

function seletElevationData() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`SELECT * FROM Elevations`, function (err, result) {
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
// TODO CHECK WHICH LOCATION YOU ARE TALKING ABOUT and what characterises the location
// or primary key of the the place that  you want to retrieve
function selectDataByLocation(location_id) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `SELECT * FROM Elevations where id=${location_id}`,
        function (err, result) {
          if (err || result.length === 0) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

function addElevationData(elevationData) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `INSERT INTO Elevations SET ?`,
        elevationData,
        function (err, result) {
          if (err || result.length === 0) {
            return reject(err);
          }
          return resolve(
            `The Elevation with id : ${elevationData.id} was created`
          );
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}
export { seletElevationData, addElevationData, selectDataByLocation };
