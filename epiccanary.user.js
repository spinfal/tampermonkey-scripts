// ==UserScript==
// @name         [CANARY] Discord Tags 'n Badges
// @namespace    https://waa.ai/spinpy
// @version      1.5 (Matched with stable)
// @description  [THIS IS FOR THE CANARY DISCORD WEB VERSION] Gives you badges and tags on Discord! (client-side only)
// @author       Spinfal
// @exclude      https://canary.discord.com/
// @match        https://canary.discord.com/channels/*
// @match        https://canary.discord.com/app
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    const dev = window.location.search;
    const checkDev = new URLSearchParams(dev);
    if (checkDev.get('loadDev') === 'true') {
        enableDev();
    } else if (checkDev.get('loadDev') === null) {
        window.open(`//canary.discord.com/channels/@me?loadDev=false`, '_self');
    } else if (checkDev.get('loadDev') != 'false') {
        window.open(`//canary.discord.com/channels/@me?loadDev=false`, '_self');
    }
 
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
 
    function enableDev() {
            // Extracted from Samogot's LibDiscordInternals for BetterDiscord.
            const req = typeof(webpackJsonp) === "function" ? webpackJsonp([], {
                '__extra_id__': (module, exports, req) => exports.default = req
            }, ['__extra_id__']).default : webpackJsonp.push([[], {
                '__extra_id__': (module, exports, req) => module.exports = req
            }, [['__extra_id__']]]);
            delete req.m['__extra_id__'];
            delete req.c['__extra_id__'];
            const find = (filter, options = {}) => {
                const {cacheOnly = true} = options;
                for (let i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        let m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default))
                            return m.default;
                        if (m && filter(m))
                            return m;
                    }
                }
                if (cacheOnly) {
                    console.warn('Cannot find loaded module in cache');
                    return null;
                }
                console.warn('Cannot find loaded module in cache. Loading all modules may have unexpected side effects');
                for (let i = 0; i < req.m.length; ++i) {
                    try {
                        let m = req(i);
                        if (m && m.__esModule && m.default && filter(m.default))
                            return m.default;
                        if (m && filter(m))
                            return m;
                    }
                    catch (e) {
                    }
                }
                console.warn('Cannot find module');
                return null;
            };
            const findByUniqueProperties = (propNames, options) => find(module => propNames.every(prop => module[prop] !== undefined), options);
            Object.defineProperty(findByUniqueProperties(["isDeveloper"]),"isDeveloper",{get:_=>1,set:_=>_,configurable:true});
    }
 
    function start() {
        var options = prompt('use the numbers as selection\n1: tags\n2: badges\n3: change tag label\n4: enable/disable experiments in settings');
        if (options==="1") {
            getTags();
        } else if (options==="2") {
            getBadges();
        } else if (options==="3") {
            changeName();
        } else if (options==="4") {
            if (checkDev.get('loadDev') === 'false') {
                window.open(`//canary.discord.com/channels/@me?loadDev=true`, '_self');
            } else if (checkDev.get('loadDev') === 'true') {
                window.open(`//canary.discord.com/channels/@me?loadDev=false`, '_self');
            }
        } else {
            console.log('invalid option or nothing provided');
        }
    }
})();
