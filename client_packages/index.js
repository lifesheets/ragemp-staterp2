"use strict";

try {
    require('./wixcore');
}catch (e) {
    mp.game.graphics.notify(`${e.toString()}`);
}