"use strict"; // Created by ua.lifesheets on 29.01.2023.

module.exports = {
    init: async function () {
        var list = await WixCore.Library.MySQL.Models.VehicleFeature.findAll({
            attributes: ['id', 'display_name', 'class_name', 'class_name_ru', 'hash', 'stock', 'stock_full', 'fuel_full', 'fuel_min', 'fuel_type', 'type', 'price', 'sb', 'sm'],
            order: [['id', 'DESC'], ['display_name', 'ASC']],
        })
        if (list === null) {
            return;
        }
        list.forEach(arg => {
            WixCore.Array.Vehicles.Features.push(arg);
        });
        console.log(`[INFO] Vehicle specifications uploaded: [${WixCore.Array.Vehicles.Features.length}/${list.length}]`);
    }
}