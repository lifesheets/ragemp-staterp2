'use strict'; // Created the file 29.01.2023 by ٴٴٴua.lifesheets#6206

let vSync = require('../../dednet/managers/vSync');
let vehicles = require('../../dednet/property/vehicles');
// let showcase = exports;

module.exports = {
    init: async function () {
        var list = await WixCore.Library.MySQL.Models.VehicleShowCase.findAll();
        if (list === null) {
            return;
        }
        list.forEach(arg => {
            if (arg.trunk) {
                vehicles.spawnCarCb(vehicle => {
                    if (!vehicles.exists(vehicle)) {
                        return;
                    }
                    vehicle.locked = true;
                    vehicle.engine = false;
                    vehicle.setVariable('useless', true);
                    vSync.setTrunkState(vehicle, false);
                }, new mp.Vector3(arg.x, arg.y, arg.z), arg.h, arg.model);
            } else {
                vehicles.spawnCarCb(vehicle => {
                    if (!vehicles.exists(vehicle)) {
                        return;
                    }
                    vehicle.locked = true;
                    vehicle.engine = false;
                    vehicle.setVariable('useless', true);
                    vSync.setTrunkState(vehicle, true);
                }, new mp.Vector3(arg.x, arg.y, arg.z), arg.h, arg.model);
            }
        });
        console.log(`[INFO] Loaded transport showcases for visualization. [${list.length}] шт.`);
    }
}