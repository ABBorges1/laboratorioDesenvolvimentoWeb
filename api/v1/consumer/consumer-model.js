const Sequelize = require('sequelize');
const db = require('../../../config/db');

const Consumer = db.sequelize.define('consumer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'cidade'
    }
}, {
    timestamps: false,
    tableName: 'cliente'
});

module.exports = Consumer;