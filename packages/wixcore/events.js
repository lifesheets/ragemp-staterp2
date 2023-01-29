"use strict"; // Created by ua.lifesheets on 29.01.2023.

mp.events.add('wixcore::debug:client:transfer:server', (player, message) => {
    WixCore.Debug.Client(player, message);
});