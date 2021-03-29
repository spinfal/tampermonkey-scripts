// ==UserScript==
// @name         Commodore Clicker Exploit
// @namespace    https://waa.ai/spinpy
// @version      1.3
// @description  An exploit that will add useful features!
// @author       Spinfal
// @match        http://c64clicker.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const spin = document.createElement('p'); // if you steal my code and change it, youre a big poopie head and no one likes you.
    spin.innerHTML = '<br><img src="https://www.google.com/s2/favicons?domain=www.spinfal.ga" draggable="false"> Exploit made by <a href="https://waa.ai/spinpy" target="_blank">Spin, aka Spinfal <3</a>';
    document.getElementsByClassName('foot')[0].appendChild(spin);

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

    function loadButtons() {
        const mod = document.createElement('li'); // change pixel amount
        mod.innerHTML = '<img src="https://www.google.com/s2/favicons?domain=www.spinfal.ga" draggable="false"> Change pixel count';
        mod.setAttribute('onclick', "let amount = prompt('new amount'); if (isNaN(parseInt(amount))) { alert('that wasnt a number!'); } else { localStorage.setItem('c64click.bank', parseInt(amount)); localStorage.setItem('c64click.produced', parseInt(amount)); window.location.reload(); }");
        mod.setAttribute('id', 'option2');
        mod.setAttribute('class', 'active');
        document.getElementsByTagName('ul')[3].append(mod);

        const cps = document.createElement('li'); // change cps amount
        cps.innerHTML = '<img src="https://www.google.com/s2/favicons?domain=www.spinfal.ga" draggable="false"> Change cps count';
        cps.setAttribute('onclick', "let amount = prompt('new amount'); if (isNaN(parseInt(amount))) { alert('that wasnt a number!'); } else { localStorage.setItem('c64click.cps', parseInt(amount)); window.location.reload(); }");
        cps.setAttribute('id', 'option3');
        cps.setAttribute('class', 'active');
        document.getElementsByTagName('ul')[3].append(cps);

        const power = document.createElement('li'); // change click power
        power.innerHTML = '<img src="https://www.google.com/s2/favicons?domain=www.spinfal.ga" draggable="false"> Change click power';
        power.setAttribute('onclick', "let amount = prompt('new amount'); if (isNaN(parseInt(amount))) { alert('that wasnt a number!'); } else { localStorage.setItem('c64click.clickPower', parseInt(amount)); window.location.reload(); }");
        power.setAttribute('id', 'option4');
        power.setAttribute('class', 'active');
        document.getElementsByTagName('ul')[3].append(power);
    }
    setTimeout(function() { loadButtons(); }, 300);

    setTimeout(function() { document.getElementById('reset').addEventListener('click', setPrice()); }, 6000); // hard reset detection - doesnt seem to work
})();
