"use strict"; // Created by ua.lifesheets on 29.01.2023.

module.exports = {
    CreateFileTmp: function (file) {
        fs.open(file, 'r', function (err) {
            if (err) {
                fs.writeFile(file, '', function (err) {
                    if (err) {
                        WixCore.Function.Debug.Server(`[ERROR] ${err}`);
                    } else {
                        WixCore.Function.Debug.Server('[DONE] File saved successfully.');
                    }
                });
            } else {
                WixCore.Function.Debug.Server('[INFO] The file already exists.');
            }
        });
    },
    RecordFileTmp: function (folder, file, record) {
        fs.appendFile("tmp/" + folder + '/' + file + ".txt", `${record}\n`, function (err) {
            if (err) {
                this.CreateFileTmp(file);
                WixCore.Function.Debug.Server(`[ERROR] ${err}`);
            }
        });
    }
}