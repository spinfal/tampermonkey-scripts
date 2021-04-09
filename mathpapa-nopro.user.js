// ==UserScript==
// @name         MathPapa No-Pro Calculator 
// @namespace    http://waa.ai/spinpy
// @version      1.5
// @description  Allows you to use MathPapa's calculator and show the steps for work without needing to buy the Pro version
// @author       Spinfal
// @match        https://mathpapa.com/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    document.getElementById("parse_btn").innerText = 'Go! (No-Pro)';
    document.getElementById("myaid").style = 'display: none;'; // hides the ad, cuz why not
 
    function noPro() {
        var today = new Date();
        var month = today.getMonth();
        month = month + 1;
        var day = today.getDate();
        var year = today.getFullYear();
        var date = month + '/' + day + '/' + year;
        console.log(date);
        localStorage.removeItem('count.t-steps.total');
        localStorage.removeItem('count.p-steps.' + date);
    }
 
    document.getElementsByClassName('share_2')[0].style.display = 'none';
    document.getElementById("parse_btn").addEventListener("click", noPro);
    document.getElementById("soloutbuttondiv").addEventListener("click", noPro);
    document.getElementById("solstepshowlink").addEventListener("click", noPro);
    document.getElementById("solpickdiv").addEventListener("click", noPro);
})();
