// ==UserScript==
// @name         Twitter Followers (Qlizz Auto-Clicker)
// @namespace    https://waa.ai/spinpy
// @version      1
// @description  Every 1 hour, it will automatically click the Get Followers button!
// @author       Spinfal
// @match        https://twitter.qlizz.com/autofollowers
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('waiting one hour...');
  
    setInterval(function() { document.getElementsByTagName('button')[1].click(); }, 3600000);
})();
