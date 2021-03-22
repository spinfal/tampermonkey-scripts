// ==UserScript==
// @name         Auto Cookie Clicker
// @namespace    https://waa.ai/spinpy
// @version      1.0
// @description  Autoclicks the Cookie and gets you easy Cookies!
// @author       Spinfal
// @match        http://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function click() {
        setInterval(function() { document.getElementById('bigCookie').click() }, 0);
    }

    if (confirm('start autoclicker?')){
        click();
    }
})();
