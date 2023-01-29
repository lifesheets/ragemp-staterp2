module.exports = async () => {
    try {
        require('dotenv').config();

        global.fs               = require('fs');
        global.path             = require('path');
        global.Sequelize        = require('sequelize');
        global.Op               = Sequelize.Op;

        global.WixCore          = new Map;
        
        WixCore.MySQL           = require('./libraries/sequelize');
        // WixCore.Commands        = require('./commands');
        WixCore.Debug           = require('./debug');
        WixCore.Functions       = require('./functions');
        // WixCore.Player          = require('./player');

        await WixCore.MySQL.connect();
    } catch (err) {

    }
}