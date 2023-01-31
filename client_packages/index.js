"use strict";

try {
    require('./wixcore');
    require('./game_resources/handlers/wixcore');
    require('./game_resources/handlers/libraries');
    require('./game_resources/handlers/modules');
    require('./game_resources/handlers/events');
    
}catch (e) {
    mp.game.graphics.notify(`${e.toString()}`);
}