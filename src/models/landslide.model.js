import {
    pool
} from '../config/mysqlConfig.js'

function selectAllLandSlidesAlert() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM landslidesalert`, function (err, result) {
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
            pool.query(`DELETE FROM landslidesalert WHERE id = ${alertId}`, function (err, result) {
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
            console.log(landSlide.id)
            pool.query(`INSERT INTO landslidesalert SET ?`, landSlide, function (err, result) {
                if (err) {
                    return reject(err)
                }
                return resolve(`landslide data you added was recorded to our database.Thank you
                    for your contribution`)
            });
        } catch (err) {
            reject(err)
        }
    })
}

export {
    selectAllLandSlidesAlert,
    deleteAlertFromTableById,
    addOccuredLandSlide
}