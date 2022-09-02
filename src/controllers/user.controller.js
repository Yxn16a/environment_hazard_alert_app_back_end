// controller validate the data
import {
  selectAllUsers,
  selectUserById,
  deleteUserFromTableById,
  addUser,
  updateUserFromTable,
  doesUserExist,
  selectDeletedUser,
} from "../services/userService.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
async function login(req, res) {
  try {
    const body = req.body;
    if (!body.phoneNumber || !body.password) {
      return res.status(400).json({
        message: "PhoneNumber or Password not present",
      });
    }
    const response = await selectUserById(body.phoneNumber);
    if (response[0].destroyTime != null) {
      return res.status(401).json({
        error: `user was deleted please create account to login`,
      });
    }
    const result = bcrypt.compareSync(body.password, response[0].password);
    if (result) {
      response.password = undefined;
      const jsontoken = jwt.sign(
        {
          /**payload should do not have password in it */
          result: response, 
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "30m",
        }
      );
      res.cookie("jwt",jsontoken, {
        httpOnly: true,
        maxAge:  "30m",
      });
      return res.status(200).json({
        success: 1,
        message: "login successfully",
        token: jsontoken,
      });
    } else {
      return res.status(401).json({
        error: `unauthorized user`,
      });
    }
  } catch (err) {
    return res.status(401).json({
      error: `unauthorized user`,
    });
  }
}

function getUserLocation() {
  console.log(navigator.geolocation.getCurrentPosition());
}
async function getAllUsers(req, res) {
  try {
    const response = await selectAllUsers();
    const result = res.status(200).json({
      message: "All users found successfully",
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `No users were Found`,
    });
  }
}

async function getUserById(req, res) {
  const { phoneNumber } = req.params;
  try {
    if (phoneNumber.length != 10) {
      return res.status(400).json({
        message: `Invalide phoneNumber`,
      });
    } else {
      const response = await selectUserById(phoneNumber);
      const result = res.status(200).json({
        message: `User with phoneNumber: ${phoneNumber} was found`,
        data: response,
      });
      return result;
    }
  } catch (error) {
    return res.status(404).json({
      error: `User with phoneNumber : ${phoneNumber} is not found`,
    });
  }
}
async function deleteUserById(req, res) {
  const { phoneNumber } = req.params;
  try {
    const response = await deleteUserFromTableById(phoneNumber);
    const result = res.status(200).json({
      message: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `User with phoneNumber : ${phoneNumber} is not found`,
    });
  }
}
async function register(req, res) {
  const body = req.body;
  try {
    const phoneNumber = body.phoneNumber;
    const userAlreadyExist = await doesUserExist(phoneNumber);
    console.log(userAlreadyExist[0]);
    if (phoneNumber.length != 10) {
      return res.status(400).json({
        message: `Invalid phoneNumber: phone number must be ten numbers`,
      });
    }
    if (isNaN(phoneNumber)) {
      return res.status(400).json({
        message: `Invalid phoneNumber: phoneNumber must be a number not characters`,
      });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password less than 8 characters" });
    }
    if (body.password != body.passwordConfirm) {
      return res.status(400).json({
        message: `Passwords do not match`,
      });
    }
    if (
      !userAlreadyExist[0] &&
      body.password &&
      body.firstName &&
      body.lastName
    ) {
      body.password = await bcrypt.hash(body.password, 8);
      body.passwordConfirm = await bcrypt.hash(body.passwordConfirm, 8);
      const response = await addUser(body);
      const result = res.status(200).json({
        data: response,
      });
      return result;
    } else {
      return res.status(400).json({
        message: `User already exist or you entered wrong passaword: Create a new user or check your values`,
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: `User with phoneNumber: ${body.phoneNumber} already exist. Create a new user`,
    });
  }
}
async function updateUser(req, res) {
  const body = req.body;
  try {
    const userAlreadyExist = await doesUserExist(body.phoneNumber);
    body.password = await bcrypt.hash(body.password, 8);
    body.passwordConfirm = await bcrypt.hash(body.passwordConfirm, 8);

    if (userAlreadyExist[0]) {
      const response = await updateUserFromTable(body);
      const result = await res.status(200).json({
        data: response,
      });
      return result;
    } else {
      return res.status(400).json({
        message: `user you want to update does not exist`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      error: `User with phoneNumber : ${body.phoneNumber} was not updated`,
    });
  }
}
async function getClosedAccount(req, res) {
  try {
    const response = await selectDeletedUser();
    const result = res.status(200).json({
      message: "All deleted user were found sussfully",
      data: response,
    });
    return result;
  } catch (error) {
    return res.status(404).json({
      error: `No deleted users were Found`,
    });
  }
}

export {
  login,
  getAllUsers,
  getUserById,
  deleteUserById,
  register,
  updateUser,
  getUserLocation,
  getClosedAccount,
};
