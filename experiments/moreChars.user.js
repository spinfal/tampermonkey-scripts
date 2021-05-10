// ==UserScript==
// @name         Discord More than 2000 Chars
// @namespace    https://waa.ai/spinpy
// @run-at       document-start
// @version      1.0
// @description  An easy way to enable the upcoming 2000+ Character benefit!
// @author       Spinfal
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // thanks andyvuj24 for telling me abt @run-at 

    // heh, exeriment. nice one discord
    localStorage.setItem('exerimentOverrides', '{"2021-05_premium_increased_content_length":{"type":"user","revision":1,"bucket":1,"override":true}}');
})();
