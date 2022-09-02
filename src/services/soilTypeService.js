import pool from "../databaseConfig/connectionPool.js";

function selectSoilTypeByUserLocation() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`SELECT * FROM SoilTypes`, function (err, result) {
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

export { selectSoilTypeByUserLocation };
