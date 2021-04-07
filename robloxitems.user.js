// ==UserScript==
// @name         "Free" Roblox Items
// @namespace    https://waa.ai/spinpy
// @version      1.1
// @description  Attempts to force any Roblox item to be free.
// @author       Spinfal
// @match        https://www.roblox.com/bundles/*
// @match        https://www.roblox.com/catalog/*
// @match        https://www.roblox.com/users/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.includes('users')) {
        let user1 = document.getElementsByClassName('age-bracket-label-username')[0].innerText.replace(' :', '');
        let user2 = document.getElementsByClassName('profile-name')[0].innerText;
        setTimeout(function() {
            if (user1 === user2) {
                var dev = document.createElement('img');
                dev.setAttribute('src', 'https://cdn.discordapp.com/emojis/803719060578631710.png?v=1');
                dev.setAttribute('width', '40px');
                dev.setAttribute('draggable', 'false')
                document.getElementsByClassName('header-title')[0].appendChild(dev);
            }
        }, 800);
    }

    if (window.location.href.includes('bundles') || window.location.href.includes('catalog')) {
        document.getElementsByClassName('PurchaseButton')[0].setAttribute('data-expected-price', '0');
        document.getElementsByClassName('PurchaseButton')[0].setAttribute('data-button-action', 'get');
        document.getElementsByClassName('PurchaseButton')[0].removeAttribute('data-se');

        function setItemStatus() {
            document.getElementsByClassName('action-button')[0].innerHTML = '<div class="action-button"><a id="edit-avatar-button" href="https://www.roblox.com/my/avatar" class="btn-control-md" data-button-action="avatar"><span class="icon-nav-charactercustomizer"></span></a></div>';
            document.getElementsByClassName('price-container')[0].innerHTML = '<div class="clearfix price-container"><div class="price-container-text"><div class="item-first-line">This item is available in your inventory.</div></div><div class="action-button"><a id="edit-avatar-button" href="https://www.roblox.com/my/avatar" class="btn-control-md" data-button-action="avatar"><span class="icon-nav-charactercustomizer"></span></a></div></div>';
            setTimeout(function() {
                let chck = document.createElement('div');
                chck.setAttribute('class', 'label-checkmark');
                chck.innerHTML = '<span class="icon-checkmark-white-bold"></span>';
                let spn = document.createElement('span');
                spn.innerText = 'Item Owned';
                document.getElementsByTagName('div')[64].append(chck);
                document.getElementsByTagName('div')[64].append(spn);
                let wear = document.createElement('a');
                wear.setAttribute('class', 'rbx-menu-item item-context-menu');
                wear.setAttribute('data-toggle', 'popover');
                wear.setAttribute('data-trigger', 'focus');
                wear.setAttribute('data-bind', 'popover-content');
                wear.setAttribute('data-original-title', '');
                wear.setAttribute('title', '');
                document.getElementsByClassName('section-content')[0].appendChild(wear);
                let wearIcon = document.createElement('span');
                wearIcon.setAttribute('class', 'icon-more');
                document.getElementsByClassName('item-context-menu')[0].appendChild(wearIcon);
            }, 1000);
        }
        if (sessionStorage.getItem(window.location.href) === 'itemOwned') {
            setItemStatus();
        }

        document.getElementById('confirm-btn').addEventListener('click', function() {
            var click = setInterval(function() {
                document.getElementById('simplemodal-overlay').addEventListener('click', function() { clearInterval(click); });
                document.getElementById('simplemodal-overlay').click();
                console.log('hi');
                sessionStorage.setItem(window.location.href, 'itemOwned');
            }, 100);
            setItemStatus();
        });
        let spin = document.createElement('div');
        spin.setAttribute('class', 'font-header-1 text-subheader text-label text-overflow field-label');
        spin.innerHTML = '<i>Modded by <br>Spin</i>';
        document.getElementById('item-details').appendChild(spin);
    }
})();
