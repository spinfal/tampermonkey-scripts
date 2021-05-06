// ==UserScript==
// @name         Discord Sticker Enabler
// @namespace    https://waa.ai/spinpy
// @run-at       document-start
// @version      1.1
// @description  An easy way to enable Discord Stickers!
// @author       Spinfal
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // thanks andyvuj24 for telling me abt @run-at 

    // heh, exeriment. nice one discord
    localStorage.setItem('exerimentOverrides', '{"2020-09_dsti_user_settings":{"type":"user","revision":1,"bucket":1,"override":true},"2020-09_dstiinternaluser":{"type":"user","revision":1,"bucket":1,"override":true},"2020-06_dsti_internal":{"type":"guild","revision":1,"bucket":1,"override":true}}');
})();
