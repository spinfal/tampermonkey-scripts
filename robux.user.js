// ==UserScript==
// @name         Robux Changer
// @namespace    https://waa.ai/spinpy
// @version      1.6
// @description  Adds a button to trick your friends and change your Robux count!
// @author       Spinfal
// @match        https://www.roblox.com/*
// @match        https://web.roblox.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //if (localStorage.getItem("spinbux") !== null) {
        setTimeout(function() {
            if (isNaN(parseInt(localStorage.getItem("spinbux"))) === false) {
                if (window.location.href.includes('transactions')) {
                    setTimeout(function() {
                        document.getElementsByTagName('span')[61].innerText = localStorage.getItem("spinbux");
                    }, 0);
                }
                document.getElementById('navbar-robux').addEventListener('click', function() {
                    setTimeout(function() {
                        document.getElementsByClassName('rbx-menu-item')[5].innerText = `${localStorage.getItem("spinbux")} Robux`;
                    }, 0);
                });
                document.getElementById('nav-robux-amount').innerText = localStorage.getItem("spinbux");
            } else {
                console.log('invalid robux value detected, setting to default and removing localStorage key.');
                localStorage.removeItem("spinbux");
            }
        }, 700);
    //}

    setTimeout(function() {
        document.getElementById('settings-icon').addEventListener('click', function() {
            setTimeout(function() {
                console.log('starting');
                let li = document.createElement('li');
                li.setAttribute('id', 'changeRbxBtn');
                document.getElementById('settings-popover-menu').appendChild(li);
                console.log('set li');

                let a = document.createElement('a');
                a.setAttribute('class', 'rbx-menu-item');
                a.setAttribute('href', 'https://www.roblox.com/admin/setRoblox');
                a.innerText = 'Set Robux';
                document.getElementById('changeRbxBtn').appendChild(a);
                console.log('set a');
            }, 0);
        });
    }, 0);

    if (window.location.href.includes('admin/setRoblox')) {
        document.getElementsByClassName("content")[0].innerHTML = `<br><input type="number" placeholder="Robux Amount" id="newRbx" class="form-control input-field"><br><br><button id="setRbxBtn" class="btn-control-sm">Set New Amount</button><br><br><button id="defaultRbxBtn" class="btn-control-sm">Set to Default</button><br><br><button id="cancelRbxBtn" class="btn-control-sm">Cancel</button>`;
        setTimeout(function() {
            document.getElementById('setRbxBtn').setAttribute('onclick', 'localStorage.setItem("spinbux", document.getElementById("newRbx").value); window.open("https://roblox.com", "_self");');
            console.log('set onclick');
            document.getElementById('defaultRbxBtn').setAttribute('onclick', 'localStorage.setItem("spinbux", ""); window.open("https://roblox.com", "_self");');
            console.log('set default onclick');
            document.getElementById('cancelRbxBtn').setAttribute('onclick', 'window.open("https://roblox.com", "_self");');
            console.log('set clear onclick');
        }, 0);
    }
    // settimeouts are here just in case
})();
