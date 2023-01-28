"use strict"; // Created by ua.lifesheets on 28.01.2023.

let blips = require('./blips');

require('./events');

function init() {
    try {
        blips.init();
    } catch (err) {
        methods.debug('ERROR WORLDS INIT', err);
    }
}

init();