import {
    selectAllUsers,
    selectUserById,
    deleteUserFromTableById,
    addUser,
    updateUserFromTable,
    doesUserExist
} from '../models/User.js'

function getUserLocation() {
    console.log(navigator.geolocation.getCurrentPosition())
}

async function getAllUsers(req, res) {
    try {
        const response = await selectAllUsers();
        const result = res.status(200).json({
            message: 'All users found successfully',
            data: response
        });
        return result;
    } catch (error) {
        return res.status(404).json({
            error: `No users were Found`
        })
    }
};

async function getUserById(req, res) {
    const {
        phoneNumber
    } = req.params;
    try {
        if (phoneNumber.length != 10) {
            return res.status(400).json({
                message: `Invalide phoneNumber`
            })
        } else {
            const response = await selectUserById(phoneNumber);
            const result = res.status(200).json({
                message: `User with phoneNumber: ${phoneNumber} was found`,
                data: response
            });
            return result;
        }
    } catch (error) {
        return res.status(404).json({
            error: `User with phoneNumber : ${phoneNumber} is not found`
        })
    }
}
async function deleteUserById(req, res) {
    const {
     phoneNumber
    } = req.params;
    try {
        const response = await deleteUserFromTableById(phoneNumber);
        const result = res.status(200).json({
            message: response
        });
        return result;
    } catch (error) {
        return res.status(404).json({
            error: `User with phoneNumber : ${phoneNumber} is not found`
        })
    }
}

async function postUser(req, res) {
    const params = req.body
    try {
        const phoneNumber = params.phoneNumber; 
        const UserAlreadyExist = await doesUserExist(params.phoneNumber);
        if (phoneNumber.length !=10) { 
            return res.status(400).json({
                message:`Invalid phoneNumber: phone number must be ten numbers`
            }
            )
        }
        if (isNaN(phoneNumber)) { 
            return res.status(400).json({
                message:`Invalid phoneNumber: phoneNumber must be a number not characters`
            }
            )
        }
        if (!UserAlreadyExist[0]) {
            const response = await addUser(params);
            const result = res.status(200).json({
                data: response
            });
            return result;
        } else {
            return res.status(400).json({
                message: `user already exist: Create a new User`
            })
        }

    } catch (error) {
        return res.status(404).json({
            error: `User with phoneNumber: ${params.phoneNumber} already exist. Create a new user`
        })
    }
}
async function updateUser(req, res) {
    const params = req.body
    try {
        const UserAlreadyExist = await doesUserExist(params.phoneNumber);
        if (UserAlreadyExist[0]) {
            const response = await updateUserFromTable(params);
            const result = res.status(200).json({
                data: response
            });
            return result;
        } else { 
            return res.status(400).json({
                message: `user you want to update does not exist`
            })
        }
    } catch (error) {
        return res.status(404).json({
            error: `User with phoneNumber : ${params.phoneNumber} was not updated`
        })
    }
}
export {
    getAllUsers,
    getUserById,
    deleteUserById,
    postUser,
    updateUser,
    getUserLocation
}