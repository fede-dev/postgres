const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('postgres://localhost:5432/integradorback', {
//     logging: false
// })

const sequelize = new Sequelize('integradorback', 'postgres', 'BILLY', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize