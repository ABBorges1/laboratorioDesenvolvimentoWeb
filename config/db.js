const Sequelize = require('sequelize');

const sequelizeConfig = {
    logging: console.log,
    dialect: 'mysql',
    port: 3306, //mysql 3306
    host: 'localhost',
    pool: 2
};

//database, usuario, senha
const sequelize = new Sequelize('aula', 'root', 'fatec123*', sequelizeConfig);

module.exports = {sequelize};