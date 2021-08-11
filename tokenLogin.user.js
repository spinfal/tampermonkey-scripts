// ==UserScript==
// @name         Discord Token Login
// @namespace    https://spinfal.ga/
// @version      1.1
// @description  Allows you to login with a token
// @author       Spinfal
// @match        https://*discord.com/*
// @match        https://token.spinfal.repl.co/*
// @exclude      https://discord.com/oauth*
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (location.href.includes('token.spinfal.repl.co')) {sessionStorage.setItem('hasScript',true);}

    if (location.href.includes('discord.com')) {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (token !== null) {
            console.log(`Logging into the token: ${token}`);
            function login(token) {
                setInterval(() => {document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`}, 50);setTimeout(() => {location.reload();}, 2500);}login(`${token}`);
        } else {
            return;
        }
    }
})();
