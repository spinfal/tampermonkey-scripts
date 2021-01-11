// ==UserScript==
// @name         Discord Badges
// @namespace    https://waa.ai/spinpy
// @version      1.0
// @description  Gives you badges on Discord! (client-side only)
// @author       Spinfal
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var choice = prompt('choices:\n-1: all badges\n1: staff badge\n2: partner badge\n20: hypesquad events badge\n96: hypesquad bravery\n176: hypesquad brilliance\n272: hypesquad ballance\n8: green bug hunter\n124976: gold bug hunter\n226320: bot developer (with gold badge)\n544: early supporter badge\n\nyou can also enter a random number, and you will get a random assortment of badges\n\nif you find any more flag numbers that arent listed here, please open a ticket on my github repo or leave a feedback post on this greasyfork page');

    function getBadges(FLAGS) {
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void 0).exports.default.getCurrentUser().flags=FLAGS;
        console.log('flags set to: ' + FLAGS);
    }

    var badgeType = parseInt(choice);
    setTimeout(() => { getBadges(badgeType); }, 2500);
})();
