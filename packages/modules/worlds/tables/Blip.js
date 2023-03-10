"use strict"; // Created by ua.lifesheets on 28.01.2023.

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("WorldBlip", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.INTEGER(11),
            defaultValue: null,
            allowNull: true
        },
        position: {
            type: DataTypes.STRING(100),
            defaultValue: '{"x":0,"y":0,"z":0}',
            allowNull: false,
            get() {
                var val = this.getDataValue('position');
                return JSON.parse(val)
            },
            set(val) {
                this.setDataValue('position', JSON.stringify(val))
            }
        },
        name: {
            type: DataTypes.STRING(20),
            defaultValue: null,
            allowNull: true
        },
        scale: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        color: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        dimension: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    });
    return model;
};