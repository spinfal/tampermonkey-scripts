// ==UserScript==
// @name         Discord Activity Enabler
// @namespace    https://waa.ai/spinpy
// @version      1.0
// @run-at       document-start
// @description  An easy way to enable Discord VC Activities to use with friends!
// @author       Spinfal
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // thanks andyvuj24 for telling me abt @run-at 

    // heh, exeriment. nice one discord
    localStorage.setItem('exerimentOverrides', '{"2020-11_poker_night":{"type":"guild","revision":1,"bucket":2,"override":true}}');
})();
