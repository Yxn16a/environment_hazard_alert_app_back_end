import {
    selectAllUsers,
    selectUserById,
    deleteUserFromTableById,
    addUser,
    updateUserFromTable
} from '../models/user.model.js'

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
            error: `User Not Found`
        })
    }
};

async function getUserById(req, res) {
    const {
        id
    } = req.params;
    try {
        const response = await selectUserById(id);
        const result = res.status(200).json({
            message: `User with id of ${id} was found`,
            data: response
        });
        return result;
    } catch (error) {
        return res.status(404).json({
            error: `User with id : ${id} is not found`
        })
    }
}
async function deleteUserById(req, res) {
    const {
        id
    } = req.params;
    try {
        const response = await deleteUserFromTableById(id);
        const result = res.status(200).json({
            message: `User with id of ${id} was found`,
            data: response
        });
        return result;
    } catch (error) {
        return res.status(404).json({
            error: `User with id : ${id} is not found`
        })
    }
}

async function postUser(req, res) {
    const params = req.body
    try {
        const response = await addUser(params);
        const result = res.status(200).json({
            data: response
        });
        return result;
    } catch (error) {
        return res.status(404).json({
            error: `User with id : ${params.id} was not added`
        })
    }
}
async function updateUser(req, res) {
    const params = req.body
    try {
        const response = await updateUserFromTable(params);
        const result = res.status(200).json({
            data: response
        });
        return result;
    } catch (error) {
        return res.status(404).json({
            error: `User with id : ${params.id} was not updated`
        })
    }
}

export {
    getAllUsers,
    getUserById,
    deleteUserById,
    postUser,
    updateUser
}