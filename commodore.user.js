// ==UserScript==
// @name         Commodore Clicker Exploit
// @namespace    https://waa.ai/spinpy
// @version      1.0
// @description  An exploit that will add useful features!
// @author       Spinfal
// @match        http://c64clicker.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function setPrice() {
        if (localStorage.getItem('c64click.units.0.currPrice') === '16' || localStorage.getItem('ran') === null) {
            for (let i=0; i < 9; i++) {
                console.log(`${i} set to 0`);
                localStorage.setItem(`c64click.units.${i}.currPrice`, 0);
            }
            localStorage.setItem('ran', true);
            window.location.reload();
        }
    }
    setPrice();

    const mod = document.createElement('button');
    mod.innerText = 'change pixel count';
    mod.setAttribute('onclick', "let amount = prompt('new amount'); if (isNaN(parseInt(amount))) { alert('that wasnt a number!'); } else { localStorage.setItem('c64click.bank', parseInt(amount)); window.location.reload(); }");
    document.getElementById('joy_down').appendChild(mod);

    const cps = document.createElement('button');
    cps.innerText = 'change cps count';
    cps.setAttribute('onclick', "let amount = prompt('new amount'); if (isNaN(parseInt(amount))) { alert('that wasnt a number!'); } else { localStorage.setItem('c64click.cps', parseInt(amount)); window.location.reload(); }");
    document.getElementById('joy_down').appendChild(cps);

    const power = document.createElement('button');
    power.innerText = 'change click power';
    power.setAttribute('onclick', "let amount = prompt('new amount'); if (isNaN(parseInt(amount))) { alert('that wasnt a number!'); } else { localStorage.setItem('c64click.clickPower', parseInt(amount)); window.location.reload(); }");
    document.getElementById('joy_down').appendChild(power);
    setTimeout(function() { document.getElementById('reset').addEventListener('click', setPrice()); }, 6000);
})();
