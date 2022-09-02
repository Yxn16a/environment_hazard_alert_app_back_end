// service will interact with database
import pool from "../databaseConfig/connectionPool.js";
import user from "../models/User.js";
function selectAllUsers() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(`SELECT * FROM Users`, function (err, result) {
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

function selectUserById(phoneNumber) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `SELECT * FROM Users WHERE  phoneNumber = ${phoneNumber}`,
        function (err, result) {
          if (err || result.length === 0) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}

// function deleteUserFromTableById(phoneNumber) {
//   return new Promise((resolve, reject) => {
//     try {
//       pool.query(
//         `DELETE FROM Users WHERE  phoneNumber = ${phoneNumber}`,
//         function (err, result) {
//           if (err || result.length === 0) {
//             return reject(err);
//           }
//           return resolve(
//             `The user with phoneNumber : ${phoneNumber} was deleted`
//           );
//         }
//       );
//     } catch (e) {
//       reject(e);
//     }
//   });
// }

function deleteUserFromTableById(phoneNumber) {
  try {
    const count = user.destroy({ where: { phoneNumber: phoneNumber } });
    return `The user with phoneNumber : ${phoneNumber} was deleted`;
  } catch (err) {
    return err;
  }
}

function doesUserExist(phoneNumber) {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `SELECT * FROM Users WHERE phoneNumber = ${phoneNumber}`,
        function (err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}

// async function doesUserExist(phoneNumber) {
//   return await user.findOne({
//     where: {phoneNumber: phoneNumber },
//   });
// }

function addUser(body) {
  try {
    user.create(body);
    return `The user with phoneNumber : ${body.phoneNumber} was created`;
  } catch (err) {
    return err;
  }
}

function updateUserFromTable(body) {
  const phoneNumber = body.phoneNumber;
  try {
    user.update(body, { where: { phoneNumber } });
    return `The user with phone number : ${body.phoneNumber} was updated successfully`;
  } catch (err) {
    return err;
  }
}
function selectDeletedUser() {
  return new Promise((resolve, reject) => {
    try {
      pool.query(
        `SELECT * FROM Users WHERE destroyTime IS NOT NULL`,
        function (err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}
export {
  doesUserExist,
  selectAllUsers,
  selectUserById,
  deleteUserFromTableById,
  addUser,
  updateUserFromTable,
  selectDeletedUser,
};
