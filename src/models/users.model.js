import {
    pool
} from '../config/mysqlConfig.js'

function selectAllUsers() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM users`, function (err, result) {
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
            pool.query(`SELECT * FROM users WHERE id = ${passedId}`, function (err, result) {
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
            pool.query(`DELETE FROM users WHERE id = ${passedId}`, function (err, result) {
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
            pool.query(`SELECT * FROM users WHERE id = ?`, [userId], function (err, result) {
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
                pool.query(`INSERT INTO  users SET ?`, user, function (err, result) {
                    if (err || result.length === 0) {
                        return reject(err)
                    }
                    return resolve(`The user with id : ${user.id} was created`)
                });
            } else {
                return resolve(`The user with id : ${user.id} already exist create a new user`)
            }
        } catch (err) {
            reject(err)
        }
    })
};

function updateUserFromTable(user) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`UPDATE users SET firstName= ?, lastName= ?, phoneNumber = ?, email = ? Where id= ?`,
                [user.firstName, user.lastName, user.phoneNumber, user.email, user.id],
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