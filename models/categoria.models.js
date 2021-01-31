const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Categoria extends Model { }

Categoria.init({
    // Model attributes are defined here
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: db, // We need to pass the connection instance
    modelName: 'Categoria' // We need to choose the model name
});

module.exports = Categoria