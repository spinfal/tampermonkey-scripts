// ==UserScript==
// @name         Discord Rebrand - Control
// @namespace    https://waa.ai/spinpy
// @run-at       document-start
// @version      1.0
// @description  Control
// @author       Spinfal
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // thanks andyvuj24 for telling me abt @run-at 

    // heh, exeriment. nice one discord
    localStorage.setItem('exerimentOverrides', '{"2021-04_product_rebrand":{"type":"user","revision":1,"bucket":0,"override":true}}');
})();