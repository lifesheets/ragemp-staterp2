"use strict";

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("VehicleFeature", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        display_name: {
            type: DataTypes.STRING(50),
            defaultValue: '',
            allowNull: false
        },
        m_name: {
            type: DataTypes.STRING(50),
            defaultValue: '',
            allowNull: false
        },
        n_name: {
            type: DataTypes.STRING(50),
            defaultValue: '',
            allowNull: false
        },
        class_name: {
            type: DataTypes.STRING(50),
            defaultValue: '',
            allowNull: false
        },
        class_name_ru: {
            type: DataTypes.STRING(50),
            defaultValue: '',
            allowNull: false
        },
        hash: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stock_full: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        fuel_full: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        fuel_min: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        fuel_type: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            defaultValue: '0',
            allowNull: false
        },
        price_dc: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        sb: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        sm: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        tm: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        temp: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        anchor: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        lck: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        sbag: {
            type: DataTypes.INTEGER(11),
            defaultValue: '5000',
            allowNull: false
        },
        trucker: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        t_main: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        t_color: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        t_inside: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        t_chip: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        t_vis: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        t_module: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        t_extra: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        t_wheels: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        t_block: {
            type: DataTypes.STRING(1024),
            defaultValue: '{}',
            allowNull: false
        },
        t_neon: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        t_light: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        r_speed: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        a_spawn: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        s_park: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        ticket_z: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        lc: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        blt: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        siren: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        k_block: {
            type: DataTypes.STRING(50),
            defaultValue: '[]',
            allowNull: false
        }
    });
    return model;
};