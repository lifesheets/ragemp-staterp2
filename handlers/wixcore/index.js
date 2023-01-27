import './dednet/modules/data';
import './dednet/modules/events';

import './dednet/manager/vSync';
import './dednet/manager/pSync';
import './dednet/manager/wpSync';
import './dednet/manager/shoot';
import './dednet/manager/heliCam';
import './dednet/manager/attachWeapons';
import './dednet/manager/cameraRotator';
import './dednet/manager/racer';
import './dednet/manager/copsRacer';
import './dednet/manager/jobPoint';
//import './dednet/manager/seats';
import "./dednet/manager/prolog";
import "./dednet/manager/scaleform";

import './dednet/betternotifs';
//import './dednet/voice';

import business from "./dednet/property/business";
import "./dednet/property/vehicles";

import ui from "./dednet/modules/ui";
import methods from "./dednet/modules/methods";

import checkpoint from "./dednet/manager/checkpoint";
import timer from "./dednet/manager/timer";
import vBreakLight from "./dednet/manager/vBreakLight";
import object from "./dednet/manager/object";
import npc from "./dednet/manager/npc";
import skill from "./dednet/manager/skill";
import attach from "./dednet/manager/attach";
import attachItems from "./dednet/manager/attachItems";
import weather from "./dednet/manager/weather";
import hosp from "./dednet/manager/hosp";
import jail from "./dednet/manager/jail";
import policeRadar from "./dednet/manager/policeRadar";

import wheel from "./dednet/casino/wheel";

import user from "./dednet/user";
import enums from "./dednet/enums";
import phone from "./dednet/phone";
import chat from "./dednet/chat";
import voiceRage from "./dednet/voiceRage";

import "./dednet/antiCheat";
import "./dednet/mainMenu";
import "./dednet/shopMenu";

import trucker from "./dednet/jobs/trucker";
import taxi from "./dednet/jobs/taxi";
import prolog from "./dednet/manager/prolog";

try {

    user.showLoadDisplay();
    user.setVirtualWorld(mp.players.local.remoteId);

    for (let i = 0; i < 50; i++)
        mp.gui.chat.push('');

    if (mp.storage.data.token) {
        mp.gui.chat.push('BlackList');
        user.kick('BlackList');
    }
    else {
        mp.gui.chat.push('Добро пожаловать на State 99 🌎');
        mp.gui.chat.push('Подождите пожалуйста, выполняется загрузка всех необходимых пакетов для комфортной игры. Это займет меньше минуты.');
        //mp.gui.chat.push('Сервер будет доступен в 17:00 По МСК');

        chat.show(false);
        chat.activate(false);
        /*enums.customIpl.forEach(item => {
            object.createIpl(item[0], new mp.Vector3(item[1], item[2], item[3]), item[4]);
        });*/

        mp.game.ped.setAiMeleeWeaponDamageModifier(1);
        mp.game.player.setMeleeWeaponDefenseModifier(1);
        mp.game.player.setWeaponDefenseModifier(1);
        mp.game.player.setVehicleDefenseModifier(.1);
        mp.game.player.setVehicleDamageModifier(.1);

        mp.gui.cursor.show(true, true);

        timer.createInterval('hosp.timer', hosp.timer, 1000);
        timer.createInterval('jail.timer', jail.timer, 1000);
        timer.createInterval('prolog.timer', prolog.timer, 500);
        timer.createInterval('voiceRage.timer', voiceRage.timer, 5);

        user.init();
        try {
            methods.requestIpls();
        }
        catch (e) {
            methods.saveFile('errorIpl', e);
        }
        setTimeout(checkpoint.checkPosition, 10000);

        enums.loadCloth();
        business.loadScaleform();

        object.load();
        npc.loadAll();
        skill.loadAll();

        wheel.loadAll();

        trucker.loadAll();
        taxi.loadAll();

        attach.init();
        attachItems.registerAttaches();

        timer.loadAll();
        vBreakLight.timer();
        policeRadar.load();

        weather.secSyncTimer();

        try {
            mp.game.stats.statSetProfileSetting(0, 0);
        }
        catch (e) {

        }

        timer.createInterval('phone.findNetworkTimer', phone.findNetworkTimer, 1000);
    }

    /*if(!mp.game.streaming.isIplActive("int_magazel1_milo_"))
    {
        user.showCustomNotify('Возможно некоторые интерьеры у вас не подгрузятся, поэтому перезайдите, фикс будет в следующей версии мультиплеера', 0, 1000);
        setTimeout(function () {
            mp.game.invoke("0xD7C10C4A637992C9"); // _LOAD_SP_DLC_MAPS
            mp.game.invoke("0x0888C3502DBBEEF5"); // _LOAD_MP_DLC_MAPS

            //mp.game.invoke("0xD7C10C4A637992C9"); mp.game.invoke("0x0888C3502DBBEEF5"); // _LOAD_MP_DLC_MAPS
        }, 5000);
    }*/

    /*mp.events.add('guiReady', () => {
        ui.create();
    });*/
}
catch (e) {
    methods.debug('ERROR INIT CLIENT', e);
    methods.debug('ERROR INIT CLIENT', e);
    methods.debug(e);
    methods.debug('ERROR INIT CLIENT', e);
    methods.debug('ERROR INIT CLIENT', e);
}