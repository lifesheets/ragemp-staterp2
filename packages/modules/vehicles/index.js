let features = require('./features');

async function init() {
    try {
        features.init();
    } catch (error) {
        console.log('[ERROR] Module -> Vehicles.', error);
    }
}

init();