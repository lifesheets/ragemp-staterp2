"use strict"; // Created by ua.lifesheets on 29.01.2023.

module.exports = {
    date: new Date(),
    GetTime: function() {
        return `${this.DigitFormat(this.date.getHours())}:${this.DigitFormat(this.date.getMinutes())}:${this.DigitFormat(this.date.getSeconds())}`;
    },
    DigitFormat : function(number) {
        return ("0" + number).slice(-2);
    },
    CreateFileTmp: function (file) {
        fs.open(file, 'r', function (err) {
            if (err) {
                fs.writeFile(file, '', function (err) {
                    if (err) {
                        WixCore.Debug.Server(`[ERROR] ${err}`);
                    } else {
                        WixCore.Debug.Server('[DONE] File saved successfully.');
                    }
                });
            } else {
                WixCore.Debug.Server('[INFO] The file already exists.');
            }
        });
    },
    RecordFileTmp: function (folder, file, record) {
        fs.appendFile("tmp/" + folder + '/' + file + ".txt", `${record}\n`, function (err) {
            if (err) {
                this.CreateFileTmp(file);
                WixCore.Debug.Server(`[ERROR] ${err}`);
            }
        });
    }
}