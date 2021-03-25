// ==UserScript==
// @name         Trash Can (Word Bank) automation
// @namespace    https://waa.ai/spinpy
// @version      1.0
// @description  Automatically add words to the word bank!
// @author       Spinfal
// @match        https://word-bank.imaybeme.repl.co
// @match        https://word-bank.imaybeme.repl.co/submit
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    async function lol() {
        let res;
        try {
            res = await fetch('https://random-word-api.herokuapp.com/word?number=1', {
              method: "GET"
            })
            res = await res.json();
        } catch(e) {
            return console.log(e);
        }

        document.getElementById('text').value = res[0];
        document.getElementsByClassName('btn')[0].click();
    }

    setInterval(function() { lol(); }, 1000);
})();
