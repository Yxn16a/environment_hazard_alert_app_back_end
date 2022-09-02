import pool from "../databaseConfig/connectionPool.js";

function selectAllLandSlidesAlert() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`SELECT * FROM Landslides`, function (err, result) {
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

function deleteAlertFromTableById(alertId) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `DELETE FROM Landslides WHERE id = ${alertId}`,
        function (err, result) {
          if (err || result.length === 0) {
            return reject(err);
          }
          return resolve(`The alert  with id : ${alertId} was deleted`);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}

function addOccuredLandSlide(landSlide) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `INSERT INTO Landslides SET ?`,
        landSlide,
        function (err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(`Landslide data you added was recorded to our database.Thank you
                    for your contribution`);
        }
      );
    } catch (err) {
      reject(err);
    }
  });
}

export {
  selectAllLandSlidesAlert,
  deleteAlertFromTableById,
  addOccuredLandSlide,
};
