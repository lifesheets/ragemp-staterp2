"use strict"; // Created by ua.lifesheets on 31.01.2023.

global.WixCore = {};

WixCore.Kernel          = './game_resources/handlers/wixcore/';
WixCore.Config          = './game_resources/handlers/configs/';
WixCore.Event           = './game_resources/handlers/events/';
WixCore.Librarie        = './game_resources/handlers/libraries/';
WixCore.Module          = './game_resources/handlers/modules/';

WixCore.Array           = require(WixCore.Kernel + 'array');
WixCore.Function        = require(WixCore.Kernel + 'functions');``