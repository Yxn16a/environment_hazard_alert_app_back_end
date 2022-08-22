import Sequelize from "sequelize"
import sequelize from "../databaseConfig/connection.js"
import pool from '../databaseConfig/connectionPool.js'


const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/ 
export default sequelize.define(
    'User', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING(20),
            allowNull: false,
             notEmpty: true
        },
        lastName: {
            type: Sequelize.STRING(20),
            allowNull: false,
            notEmpty: true
        },
        phoneNumber: {
            type: Sequelize.STRING(10),
            allowNull: false,
            unique: true,
            validate: {
                validator: function(v) {
                    return phoneValidationRegex.test(v); 
                },
            }
        },
        passWord: {
            type: Sequelize.STRING(20),
            allowNull: false, 
            notEmpty: true
        },
        userLongitude: {
            type: Sequelize.INTEGER
        },
        userLatitude: {
            type: Sequelize.INTEGER
        },
        createdAt : Sequelize.DATE, 
        updatedAt: Sequelize.DATE, 
},
{
    sequelize,
    paranoid: true,
    deletedAt: 'destroyTime'
  }
)

function selectAllUsers() {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM Users`, function (err, result) {
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

function selectUserById(phoneNumber) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM Users WHERE  phoneNumber = ${ phoneNumber}`, function (err, result) {
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

function deleteUserFromTableById(phoneNumber) {
    return new Promise((resolve, reject) => {
        try {
             pool.query(`DELETE FROM Users WHERE  phoneNumber = ${phoneNumber}`, function (err, result) {
                if (err || result.length === 0) {
                    return reject(err)
                }
                return resolve(`The user with phoneNumber : ${ phoneNumber} was deleted`)
            });   
        } catch (e) {
            reject(e)
        }
    })
};

function doesUserExist(phoneNumber) {
     
    return new Promise((resolve, reject) => {
        try {
            pool.query(`SELECT * FROM Users WHERE phoneNumber = ${phoneNumber}`, function (err, result) {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            });
        } catch (e) {
            reject(e)
        }
    })
}

function addUser(user) {
    return new Promise((resolve, reject) => {
        try {
                pool.query(`INSERT INTO  Users SET ?`, user, function (err, result) {
                    if (err || result.length === 0) {
                        return reject(err)
                    }
                    return resolve(`The user with phoneNumber : ${user.phoneNumber} was created`)
                });
        } catch (err) {
            reject(err)
        }
    })
};

function updateUserFromTable(user) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(`UPDATE Users SET firstName= ?, lastName= ?, phoneNumber = ?, passWord = ?, userLongitude = ?, userLatitude= ?  Where phoneNumber= ?`,
                [user.firstName, user.lastName, user.phoneNumber, user.passWord, user.userLongitude, user.userLatitude, user.phoneNumber],
                function (err, result) {
                    if (err || result.length === 0) {
                        return reject(err)
                    }
                    return resolve(`The user with phone number : ${user.phoneNumber} was updated`)
                });
        } catch (e) {
            reject(e)
        }
    })
};

export {
    doesUserExist,
    selectAllUsers,
    selectUserById,
    deleteUserFromTableById,
    addUser,
    updateUserFromTable
}