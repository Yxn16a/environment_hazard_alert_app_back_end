import Sequelize from "sequelize";
const sequelize = new Sequelize(
    'rsaapp',
    'root',
    'Ihavedream1!',
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false
    }
)
export default sequelize;