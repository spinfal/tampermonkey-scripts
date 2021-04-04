// ==UserScript==
// @name         Discord Activity Enabler
// @namespace    https://waa.ai/spinpy
// @version      1.0
// @description  An easy way to enable Discord VC Activities to use with friends!
// @author       Spinfal
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // MAKE SURE IT RUNS AT document-start IN SCRIPT SETTINGS!!

    // heh, exeriment. nice one discord
    localStorage.setItem('exerimentOverrides', '{"2020-11_poker_night":{"type":"guild","revision":1,"bucket":2,"override":true}}');
})();
