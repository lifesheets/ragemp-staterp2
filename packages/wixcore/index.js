module.exports = async () => {
    try {
        require('dotenv').config();

        global.fs               = require('fs');
        global.path             = require('path');
        global.Sequelize        = require('sequelize');
        global.Op               = Sequelize.Op;

        global.WixCore          = new Map;
        
        WixCore.db              = require('./libraries/sequelize');
        WixCore.commands        = require('./commands');
        WixCore.debug           = require('./debug');
        WixCore.functions       = require('./functions');
        WixCore.player          = require('./player');

        await WixCore.db.connect();
    } catch (err) {

    }
}