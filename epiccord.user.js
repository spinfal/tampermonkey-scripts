// ==UserScript==
// @name         Discord Tags 'n Badges
// @namespace    https://waa.ai/spinpy
// @version      1.4
// @description  Gives you badges and tags on Discord! (client-side only)
// @author       Spinfal
// @exclude      https://discord.com/
// @match        https://discord.com/channels/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    setTimeout(() => { start(); document.addEventListener("dblclick", start); }, 3000); // ensures page loads before running script
 
    function getTags() {
        var pickTag = prompt('1: system tag\n2: bot tag\n3: remove tag');
        if (pickTag==="1") {
            var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;
            findModule('getCurrentUser').getCurrentUser().system = true;
            console.log('system tag added to user');
        } else if (pickTag==="2") {
            var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;
            findModule('getCurrentUser').getCurrentUser().bot = true;
            console.log('bot tag added to user');
        } else if (pickTag==="3") {
            var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;
            findModule('getCurrentUser').getCurrentUser().bot = false;
            var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;
            findModule('getCurrentUser').getCurrentUser().system = false;
            console.log('all tags removed from user');
        }
    }
 
    function getBadges() {
        var choice = prompt('choices:\n0: removes all badges\n-1: all badges\n1: staff badge\n2: partner badge\n20: hypesquad events badge\n96: hypesquad bravery\n176: hypesquad brilliance\n272: hypesquad balance\n8: green bug hunter\n124976: gold bug hunter\n226320: bot developer (with gold badge)\n544: early supporter badge\n\nyou can also enter a random number, and you will get a random assortment of badges\n\nif you find any more flag numbers that arent listed here, please open a ticket on my github repo or leave a feedback post on this greasyfork page');
        var badgeType = parseInt(choice);
        Object.values(webpackJsonp.push([[],{[''] :(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getCurrentUser!==void 0).exports.default.getCurrentUser().flags=badgeType;
        console.log('flags set to: ' + badgeType);
    }
 
    function changeName() {
        var NAME = prompt('new label name: ');
        var findModule = (item) => Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}}, [['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default[item]!==void 0).exports.default;
        findModule('Messages').Messages.SYSTEM_DM_TAG_SYSTEM = NAME;
    }
 
    function start() {
        var options = prompt('1: tags\n2: badges\n3: change tag label');
        if (options==="1") {
            getTags();
        } else if (options==="2") {
            getBadges();
        } else if (options==="3") {
            changeName();
        } else {
            console.log('invalid option or nothing provided');
        }
    }
})();
