"use strict"; // Created by ua.lifesheets on 28.01.2023.

module.exports = async () => {
    try {
        require('dotenv').config();

        global.fs           = require('fs');
        global.path         = require('path');
        global.Sequelize    = require('sequelize');
        global.Op           = Sequelize.Op;

        global.WixCore      = new Map;

        WixCore.Array       = require('./array');
        WixCore.Function    = require('./functions');
        WixCore.MySQL       = require('../libraries/sequelize');
        WixCore.Debug       = require('./debug');

        // WixCore.Player          = require('./player');
        // WixCore.Commands        = require('./commands');

        await WixCore.MySQL.connect();
    } catch (err) {

    }
}