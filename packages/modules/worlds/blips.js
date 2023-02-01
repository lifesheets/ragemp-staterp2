"use strict"; // Created by ua.lifesheets on 28.01.2023.

let blips = exports;

blips.init = async function () {
    var list = await WixCore.Library.MySQL.Models.WorldBlip.findAll();
    list.forEach(arg => {
        var position = new mp.Vector3(arg.position.x, arg.position.y, arg.position.z);
        mp.blips.new(arg.type, position,
            {
                name: arg.name,
                scale: arg.scale,
                color: arg.color,
                shortRange: true,
                dimension: arg.dimension
            });
    });
    console.log(`[INFO] Blips of the world are loaded [${list.length}]`);
};
