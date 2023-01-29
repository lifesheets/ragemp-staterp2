module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("VehicleShowCase", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING(50),
            defaultValue: '',
            allowNull: false
        },
        trunk: {
            type: DataTypes.ENUM('false', 'true'),
            defaultValue: 'false',
            allowNull: false
        },
        x: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        },
        y: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        },
        z: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        },
        h: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            allowNull: false
        },
    });
    return model;
};