"use strict"; // Created by ua.lifesheets on 29.01.2023.

module.exports = {
    Server: function (message, ...args) {
        if (WixCore.Config.Debug.Server.Console) {
            console.log(`[SERVER-SIDE][${WixCore.Function.DataTime.GetTime()}] ${message}`, args);
        }
        if (WixCore.Config.Debug.Client.SaveFile) {
            var folder = 'server_debugs';
            var tofile = WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getDate()) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getMonth() + 1) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getFullYear());
            var record = `[${WixCore.Function.DataTime.GetTime()}] ${message} | ${JSON.stringify(args)}`;
            WixCore.Function.SaveFile.RecordFileTmp(folder, tofile, record);
        }
    },
    Client: function (player, message) {
        if (WixCore.Config.Debug.Client.Console) {
            console.log(`[CLIENT-SIDE][${player.socialClub}]: ${message}`);
        }
        if (WixCore.Config.Debug.Server.SaveFile === 'true') {
            var folder = 'client_debugs';
            var tofile = WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getDate()) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getMonth() + 1) + '-' + WixCore.Function.DataTime.DigitFormat(WixCore.Function.DataTime.Date.getFullYear());
            var record = `[${player.socialClub}] ${message}`;
            WixCore.Function.SaveFile.RecordFileTmp(folder, tofile, record);
        }
    }
}