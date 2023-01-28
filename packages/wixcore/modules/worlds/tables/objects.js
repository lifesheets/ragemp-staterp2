"use strict"; // Created by ua.lifesheets on 28.01.2023.

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("world_object", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        hash: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0
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
        alpha: {
            type: DataTypes.INTEGER(11),
            defaultValue: 255
        },
        dimension: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0
        },
        rotation: {
            type: DataTypes.STRING(100),
            defaultValue: '{"x":0,"y":0,"z":0}',
            allowNull: false,
            get() {
                var val = this.getDataValue('rotation');
                return JSON.parse(val)
            },
            set(val) {
                this.setDataValue('rotation', JSON.stringify(val))
            }
        },
        destination: {
            type: DataTypes.ENUM,
            values: ['Default', 'Spawn', 'LifeInvader', 'LTD', 'LSPD', 'USMC', 'Stock', 'MazeBankArena', 'SAPD', 'ATM', 'Trucker', 'Others'],
            defaultValue: 'default'
        },
        status: {
            type: DataTypes.ENUM,
            values: ['Y', 'N'],
            defaultValue: 'Y'
        },
        comment: {
            type: DataTypes.TEXT,
            defaultValue: ''
        }
    });
    return model;
};