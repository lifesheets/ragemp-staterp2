"use strict"; // Created by ua.lifesheets on 28.01.2023.

module.exports = {
    sequelize: null,
    Models: {},
    Connect: function () {
        this.sequelize = new Sequelize(WixCore.Config.MySQL.Name, WixCore.Config.MySQL.User, WixCore.Config.MySQL.Pass, {
            host: WixCore.Config.MySQL.Host,
            dialect: 'mysql',
            port: WixCore.Config.MySQL.Port || 3306,
            logging: false,
            pool: {
                max: 50,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            dialectOptions: {
                connectTimeout: 15000
            },
            define: {
                timestamps: false
            }
        });
        this.loadModels();
    },
    loadModels: function () {
        console.log("[INFO] Loading database models ...");
        // Завантаження моделей для модулів
        fs.readdirSync(path.dirname(__dirname) + '\\modules\\').forEach(catalog => {
            if (fs.existsSync(path.dirname(__dirname) + '\\modules\\' + catalog + '\\tables')) {
                fs.readdirSync(path.dirname(__dirname) + '\\modules\\' + catalog + '\\tables').forEach(file => {
                    let model = require(path.dirname(__dirname) + '\\modules\\' + catalog + '\\tables\\' + file)(this.sequelize, Sequelize.DataTypes)
                    this.Models[model.name] = model;
                });
            }
        })
        for (var name in this.Models) {
            var model = this.Models[name];
            if (model.associate) {
                model.associate(this.Models);
            }
        }
        this.sequelize.sync();
        console.log("[DONE] The connection to the database was successful.");
    }
};