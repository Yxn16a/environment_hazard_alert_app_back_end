import {
    pool
} from '../config/mysqlConfig.js'

function selectAllUsers() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM precipitation`, function (err, result) {
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

function selectUserById(passedId) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM precipitation WHERE id = ${passedId}`, function (err, result) {
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

function deleteUserFromTableById(passedId) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`DELETE FROM precipitation WHERE id = ${passedId}`, function (err, result) {
                if (err || result.length === 0) {
                    return reject(err)
                }
                return resolve(`The user with id : ${passedId} was deleted`)
            });
        } catch (e) {
            reject(e)
        }
    })
};

function doesUserExist(userId) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM precipitation WHERE id = ?`, userId, function (err, result) {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            });
        } catch (err) {
            reject(err);
        }
    });
};

function addUser(user) {
    return new Promise((resolve, reject) => {
        try {
            if (doesUserExist(user.id)) {
                pool.query(`INSERT INTO  precipitation SET ?`, user, function (err, result) {
                    if (err || result.length === 0) {
                        return reject(err)
                    }
                    return resolve(`The user with id : ${user.id} was created`)
                });
            } else {
                return resolve(`The user with id : ${user.id} already exist create a new user`)
            }
        } catch (e) {
            reject(e)
        }
    })
};

function updateUserFromTable(user) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`UPDATE precipitation SET province= ?, district = ?, sector = ?, cell = ? Where id= ?`,
                [user.province, user.district, user.sector, user.cell, user.id],
                function (err, result) {
                    if (err || result.length === 0) {
                        return reject(err)
                    }
                    return resolve(`The user with id : ${user.id} was updated`)
                });
        } catch (e) {
            reject(e)
        }
    })
};

export {
    selectAllUsers,
    selectUserById,
    deleteUserFromTableById,
    addUser,
    updateUserFromTable
}