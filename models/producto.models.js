const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Producto extends Model { }

Producto.init({
    // Model attributes are defined here
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    timestamps: false,
    sequelize: db, // We need to pass the connection instance
    modelName: 'producto' // We need to choose the model name
});

module.exports = Producto