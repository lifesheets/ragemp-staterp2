"use strict"; // Created by ua.lifesheets on 29.01.2023.

module.exports = {
    Date: new Date(),
    GetTime: function () {
        return `${this.DigitFormat(this.Date.getHours())}:${this.DigitFormat(this.Date.getMinutes())}:${this.DigitFormat(this.Date.getSeconds())}`;
    },
    DigitFormat: function (number) {
        return ("0" + number).slice(-2);
    },
}