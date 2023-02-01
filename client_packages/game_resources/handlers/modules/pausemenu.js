"use strict"; // Created by ua.lifesheets on 31.01.2023.

WixCore.PauseMenuBlockName = () => {
    mp.game.invoke('0xF314CF4F0211894E', 143, 255, 165, 0, 255); // Цвет вкладок.
    mp.game.invoke('0xF314CF4F0211894E', 116, 255, 165, 0, 255); // Цвет настроек.
    mp.game.gxt.set('PM_PAUSE_HDR', 'WELCOME TO THE WIXCORE - GAME SERVER RAGEMP 1.1');   // Названия карты.
};

WixCore.PauseMenuBlockPlayer = () => {
    if (!mp.game.ui.isPauseMenuActive()) {
        return;
    }
    // Проверяем на ESC меню.
    if (!mp.game.ui.isPauseMenuActive()) return;
    // Задаем значения на вывод.
    const nameServer = 'WixCore.Net'.toUpperCase();
    // const serverDate = weather.getRealDate()+'/2023';
    // const serverTime = weather.getRealTime();
    // Меню персонажа, аватарка и время.
    mp.game.graphics.beginScaleformMovieMethodOnFrontend("SET_HEADING_DETAILS");
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(nameServer);
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString('server date');
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString('server time');
    mp.game.graphics.scaleformMovieMethodAddParamBool(false);
    mp.game.graphics.endScaleformMovieMethod();
};
