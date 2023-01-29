"use strict"; // Created by ua.lifesheets on 29.01.2023.

function init() {
    fs.readdirSync(path.dirname(__dirname) + '\\modules\\').forEach(catalog => {
        // if (fs.existsSync(path.dirname(__dirname) + '\\modules\\' + catalog + '\\events.js')) {
        //     require(path.dirname(__dirname) + '\\modules\\' + catalog + '\\events.js');
        // }
        require(path.dirname(__dirname) + '\\modules\\' + catalog + '\\index.js');
    })
}

init();