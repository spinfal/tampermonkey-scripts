// ==UserScript==
// @name         Auto Cookie Clicker
// @namespace    https://waa.ai/spinpy
// @version      1.1
// @description  Autoclicks the Cookie and gets you easy Cookies and upgrades!
// @author       Spinfal
// @match        http://orteil.dashnet.org/cookieclicker/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function click() {
        setInterval(function() { document.getElementById('bigCookie').click() }, 0);

    }

    function upgrades() {
        let delay = prompt('enter an interval to auto buy upgrades (in seconds)');
        console.log(`delay set to: ${delay}`);
        setInterval(function() { document.getElementsByClassName('crate upgrade')[0].click() }, parseInt(delay) * 1000);
    }

    if (confirm('start autoclicker?')) {
        click();
    }

    if (confirm('auto buy upgrades?')) {
        upgrades();
    }
})();
