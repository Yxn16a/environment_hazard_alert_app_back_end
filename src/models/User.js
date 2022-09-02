import Sequelize from "sequelize";
import sequelize from "../databaseConfig/connection.js";
const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/;
const passwordRequirements =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export default sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.STRING(45),
      allowNull: false,
      notEmpty: true,
    },
    lastName: {
      type: Sequelize.STRING(45),
      allowNull: false,
      notEmpty: true,
    },
    phoneNumber: {
      type: Sequelize.STRING(14),
      allowNull: false,
      validate: {
        validator: function (v) {
          return phoneValidationRegex.test(v);
        },
      },
    },
    password: {
      type: Sequelize.STRING(300),
      allowNull: false,
      notEmpty: true,
      validate: {
        validator: function (v) {
          return passwordRequirements.test(v);
        },
      }
    },
    passwordConfirm: {
      type: Sequelize.STRING(300),
      allowNull: false,
      notEmpty: true,
    },
    userLongitude: {
      type: Sequelize.INTEGER,
    },
    userLatitude: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updatedAt: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  },
  {
    sequelize,
    paranoid: true,
    deletedAt: "destroyTime",
  }
);

/**  LOOK FOR THIS AND ADD IT LTER
 *       resetPasswordExpires:
 *         type: string
 *         format: date-time
 */
