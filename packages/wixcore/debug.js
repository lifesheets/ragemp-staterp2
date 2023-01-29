"use strict"; // Created by ua.lifesheets on 29.01.2023.

module.exports = {
    date: new Date(),
    Server: function (message, ...args) {
        if (process.env.server_debug_console === 'true') {
            console.log(`[SERVER-SIDE][${WixCore.Function.GetTime()}] ${message}`, args);
        }
        if (process.env.client_debug_savefile === 'true') {
            var folder = 'server_debugs';
            var tofile = WixCore.Function.DigitFormat(this.date.getDate()) + '-' + WixCore.Function.DigitFormat(this.date.getMonth() + 1) + '-' + WixCore.Function.DigitFormat(this.date.getFullYear());
            var record = `[${WixCore.Function.GetTime()}] ${message} | ${JSON.stringify(args)}`;
            WixCore.Function.RecordFileTmp(folder, tofile, record);
        }
    },
    Client: function (player, message) {
        if (process.env.client_debug_console === 'true') {
            console.log(`[CLIENT-SIDE][${player.socialClub}]: ${message}`);
        }
        if (process.env.server_debug_savefile === 'true') {
            var folder = 'client_debugs';
            var tofile = WixCore.Function.DigitFormat(this.date.getDate()) + '-' + WixCore.Function.DigitFormat(this.date.getMonth() + 1) + '-' + WixCore.Function.DigitFormat(this.date.getFullYear());
            var record = `[${player.socialClub}] ${message}`;
            WixCore.Function.RecordFileTmp(folder, tofile, record);
        }
    }
}