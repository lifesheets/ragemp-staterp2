let features = require('./features');
let showcase = require('./showcase');

async function init() {
    try {
        features.init();
        showcase.init();
    } catch (error) {
        console.log('[ERROR] Module -> Vehicles.', error);
    }
}

init();