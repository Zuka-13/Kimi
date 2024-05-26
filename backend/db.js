const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('Kimi', 'postgres', 'calippo', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
        connectTimeout: 30000, // Increase connection timeout if needed
        charset: 'utf8', 
        collate: 'utf8_general_ci', 
    },
    logging: false 
});

module.exports = sequelize;
