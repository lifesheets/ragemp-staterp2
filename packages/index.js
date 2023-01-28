"use strict";

(async () => {
    await require('./wixcore')();
})();

require('./dednet/modules/cli');
require('./dednet/modules/data');
require('./dednet/modules/events');
require('./dednet/modules/chat');
require('./dednet/voice/voice');
require('./dednet/managers/vSync');
require('./dednet/managers/wpSync');
require('./dednet/managers/attach');
require('./dednet/managers/attachWeapons');
require('./dednet/managers/dispatcher');
require('./dednet/casino/wheel');

let mysql = require('./dednet/modules/mysql');
let methods = require('./dednet/modules/methods');
let vehicleInfo = require('./dednet/modules/vehicleInfo');
let ctos = require('./dednet/modules/ctos');
let cloth = require('./dednet/business/cloth');
let tattoo = require('./dednet/business/tattoo');
let lsc = require('./dednet/business/lsc');
let gun = require('./dednet/business/gun');
let vShop = require('./dednet/business/vShop');
let carWash = require('./dednet/business/carWash');
let rent = require('./dednet/business/rent');
let bar = require('./dednet/business/bar');
let barberShop = require('./dednet/business/barberShop');
let bank = require('./dednet/business/bank');
let fuel = require('./dednet/business/fuel');
let shop = require('./dednet/business/shop');
let tradeMarket = require('./dednet/business/tradeMarket');
let houses = require('./dednet/property/houses');
let condos = require('./dednet/property/condos');
let business = require('./dednet/property/business');
let vehicles = require('./dednet/property/vehicles');
let stocks = require('./dednet/property/stocks');
let fraction = require('./dednet/property/fraction');
let family = require('./dednet/property/family');
let yachts = require('./dednet/property/yachts');
let weather = require('./dednet/managers/weather');
let pickups = require('./dednet/managers/pickups');
let gangWar = require('./dednet/managers/gangWar');
let canabisWar = require('./dednet/managers/canabisWar');
let gangZone = require('./dednet/managers/gangZone');
let copsRacer = require('./dednet/managers/copsRacer');
let mafiaWar = require('./dednet/managers/mafiaWar');
let timer = require('./dednet/managers/timer');
let ems = require('./dednet/managers/ems');
let tax = require('./dednet/managers/tax');
let discord = require('./dednet/managers/discord');
let racer = require('./dednet/managers/racer');
let trucker = require('./dednet/managers/trucker');
let graffiti = require('./dednet/managers/graffiti');
let fishing = require('./dednet/managers/fishing');
let coffer = require('./dednet/coffer');
let inventory = require('./dednet/inventory');
let weapons = require('./dednet/weapons');
let enums = require('./dednet/enums');

require('./wixcore/modules/worlds');

function init() {
    try {
        methods.debug('INIT GAMEMODE');

        mysql.executeQuery('UPDATE users SET is_online=\'0\', st_order_atm_d=\'0\', st_order_drug_d=\'0\', st_order_lamar_d=\'0\' WHERE 1');

        for (let i = 0; i < weapons.hashesMap.length; i++)
            weapons.hashesMap[i][1] *= 2;

        vehicleInfo.loadAll();
        ctos.loadAll();
        graffiti.loadAll();
        fishing.loadAll();

        houses.loadAll();
        yachts.loadAll();
        condos.loadAll();
        condos.loadBigAll();
        business.loadAll();
        stocks.loadAll();
        fraction.loadAll();
        family.loadAll();
        gangWar.loadAll();
        canabisWar.loadAll();
        //mafiaWar.loadAll();
        timer.loadAll();
        tax.loadAll();

        trucker.loadAll();

        weather.loadAll();
        racer.loadAll();
        gangZone.loadAll();
        copsRacer.loadAll();

        carWash.loadAll();
        rent.loadAll();
        lsc.loadAll();
        bar.loadAll();
        barberShop.loadAll();
        cloth.loadAll();
        tattoo.loadAll();
        gun.loadAll();
        bank.loadAll();
        fuel.loadAll();
        shop.loadAll();
        tradeMarket.loadAll();

        pickups.createAll();

        coffer.load();

        methods.loadAllBlips();

        inventory.loadAll();

        vShop.loadAllShop();

        let c = a => 10 > a ? 2e4 + +a : a.charCodeAt(0);

        enums.clothM = enums.clothM.sort((a, b) => c(a[9][0] + a[9][1]) - c(b[9][0] + b[9][1]));
        enums.clothF = enums.clothF.sort((a, b) => c(a[9][0] + a[9][1]) - c(b[9][0] + b[9][1]));

        enums.propM = enums.propM.sort((a, b) => c(a[5][0] + a[5][1]) - c(b[5][0] + b[5][1]));
        enums.propF = enums.propF.sort((a, b) => c(a[5][0] + a[5][1]) - c(b[5][0] + b[5][1]));

        enums.tattooList = enums.tattooList.sort((a, b) => c(a[0]) - c(b[0]));

        setInterval(methods.saveAllAnother, 15 * 1000 * 60);

        setTimeout(function () {
            vShop.loadAllShopVehicles();
            vehicles.loadAllTimers();
            vehicles.loadAllFractionVehicles();
            vehicles.checkVehiclesFuel();
        }, 10000);
    }
    catch (e) {
        methods.debug('ERROR INIT', e);
    }
}

init();