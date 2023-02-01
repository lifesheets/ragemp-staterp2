"use strict";

try {
    "use strict"; // Created by ua.lifesheets on 31.01.2023.

    //#region Global
    global.WixCore = {}
    
    WixCore.Kernel          = './game_resources/handlers/wixcore/'
    WixCore.Config          = './game_resources/handlers/configs/'
    WixCore.Event           = './game_resources/handlers/events/'
    WixCore.Librarie        = './game_resources/handlers/libraries/'
    WixCore.Module          = './game_resources/handlers/modules/'
    //#endregion
    
    //#region Config
    WixCore.Config = {}
    //#endregion
    
    //#region Array
    WixCore.Array = {}
    //#endregion
    
    //#region Libraries
    WixCore.Library = {}
    //#endregion
    
    //#region Function
    WixCore.Function = {}
    //#endregion
    
    //#region Commands
    WixCore.Commands = {}
    //#endregion
    
    //#region Player
    WixCore.Player = {}
    //#endregion
    
    //#region Modules
    require(WixCore.Module + 'pausemenu')
    //#endregion
    
    //#region events
    require(WixCore.Event + 'pausemenu');
    //#endregion
    
    //#region DedNet
    require('./wixcore');
    //#endregion
}catch (e) {
    mp.game.graphics.notify(`${e.toString()}`);
}