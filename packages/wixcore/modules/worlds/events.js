"use strict"; // Created by ua.lifesheets on 28.01.2023.

mp.events.add("packagesLoaded", async () => {
    var list = await WixCore.db.Models.WorldObject.findAll();
    if (list === null) return;
    list.forEach(arg => {
        if (arg.status === 'N') return;
        mp.objects.new(arg.name, new mp.Vector3(arg.position.x, arg.position.y, arg.position.z - 1), {
            alpha: arg.alpha,
            dimension: arg.dimension,
            rotation: arg.rotation
        });
    });
    console.log(`[INFO] Об'єкти для світу завантажено: [${list.length}]`);
});
