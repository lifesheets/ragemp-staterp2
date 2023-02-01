"use strict"; // Created by ua.lifesheets on 29.01.2023.

module.exports = {
    Server: function (message, ...args) {
        if (process.env.server_debug_console === 'true') {
            console.log(`[SERVER-SIDE][${WixCore.Function.DataTime.GetTime()}] ${message}`, args);
        }
        if (process.env.client_debug_savefile === 'true') {
            var folder = 'server_debugs';
            var tofile = WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getDate()) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getMonth() + 1) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getFullYear());
            var record = `[${WixCore.Function.DataTime.GetTime()}] ${message} | ${JSON.stringify(args)}`;
            WixCore.Function.SaveFile.RecordFileTmp(folder, tofile, record);
        }
    },
    Client: function (player, message) {
        if (process.env.client_debug_console === 'true') {
            console.log(`[CLIENT-SIDE][${player.socialClub}]: ${message}`);
        }
        if (process.env.server_debug_savefile === 'true') {
            var folder = 'client_debugs';
            var tofile = WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getDate()) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getMonth() + 1) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getFullYear());
            var record = `[${player.socialClub}] ${message}`;
            WixCore.Function.SaveFile.RecordFileTmp(folder, tofile, record);
        }
    }
}