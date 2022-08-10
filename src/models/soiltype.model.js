import {
    pool
} from '../config/mysqlConfig.js'

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
    selectSoilTypeByUserLocation
}