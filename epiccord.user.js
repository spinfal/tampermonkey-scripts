// ==UserScript==
// @name         Discord Tags 'n Badges
// @namespace    https://waa.ai/spinpy
// @version      1.3
// @description  Gives you badges and tags on Discord! (client-side only)
// @author       Spinfal
// @exclude      https://discord.com/
// @match        https://discord.com/channels/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
 
    const _0x346e9b=function(){let _0x489651=!![];return function(_0x35856e,_0x2a44c6){const _0x209fd3=_0x489651?function(){if(_0x2a44c6){const _0x1c2856=_0x2a44c6['\x61\x70\x70\x6c\x79'](_0x35856e,arguments);return _0x2a44c6=null,_0x1c2856;}}:function(){};return _0x489651=![],_0x209fd3;};}(),_0x1fa412=_0x346e9b(this,function(){const _0x113621=function(){const _0x3760e4=_0x113621['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22\x2f')()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x5e\x28\x5b\x5e\x20\x5d\x2b\x28\x20\x2b\x5b\x5e\x20\x5d\x2b\x29\x2b\x29\x2b\x5b\x5e\x20\x5d\x7d');return!_0x3760e4['\x74\x65\x73\x74'](_0x1fa412);};return _0x113621();});_0x1fa412();const _0x302134=function(){let _0x58067e=!![];return function(_0x130db8,_0x3d8fc2){const _0x13ca16=_0x58067e?function(){if(_0x3d8fc2){const _0x585118=_0x3d8fc2['\x61\x70\x70\x6c\x79'](_0x130db8,arguments);return _0x3d8fc2=null,_0x585118;}}:function(){};return _0x58067e=![],_0x13ca16;};}(),_0x35cf3f=_0x302134(this,function(){const _0x31720a=function(){let _0x1cef68;try{_0x1cef68=Function('\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20'+'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29'+'\x29\x3b')();}catch(_0x1ddb37){_0x1cef68=window;}return _0x1cef68;},_0x199090=_0x31720a(),_0x23e42f=function(){return{'\x6b\x65\x79':'\x69\x74\x65\x6d','\x76\x61\x6c\x75\x65':'\x61\x74\x74\x72\x69\x62\x75\x74\x65','\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65':function(){for(let _0x56fd5c=0x0;_0x56fd5c<0x3e8;_0x56fd5c--){const _0x122a03=_0x56fd5c>0x0;switch(_0x122a03){case!![]:return this['\x69\x74\x65\x6d']+'\x5f'+this['\x76\x61\x6c\x75\x65']+'\x5f'+_0x56fd5c;default:this['\x69\x74\x65\x6d']+'\x5f'+this['\x76\x61\x6c\x75\x65'];}}}()};},_0x1091df=new RegExp('\x5b\x6e\x64\x58\x4f\x76\x58\x70\x66\x64\x49\x75\x47\x6e\x4e\x64\x43\x5a\x45\x52\x59\x75\x53\x55\x62\x42\x49\x56\x56\x61\x56\x59\x64\x77\x42\x5d','\x67'),_0x5c1cd5='\x6e\x63\x64\x36\x58\x34\x4f\x63\x76\x58\x70\x66\x6c\x64\x49\x75\x69\x63\x6b\x65\x47\x72\x2e\x63\x6e\x4e\x64\x43\x5a\x45\x6f\x52\x6d\x59\x75\x53\x55\x62\x42\x49\x56\x56\x61\x56\x59\x64\x77\x42'['\x72\x65\x70\x6c\x61\x63\x65'](_0x1091df,'')['\x73\x70\x6c\x69\x74']('\x3b');let _0xe2bb56,_0x5c5028,_0x6a9a74,_0x239855;for(let _0x28ebb5 in _0x199090){if(_0x28ebb5['\x6c\x65\x6e\x67\x74\x68']==0x8&&_0x28ebb5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x7)==0x74&&_0x28ebb5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x5)==0x65&&_0x28ebb5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x3)==0x75&&_0x28ebb5['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x0)==0x64){_0xe2bb56=_0x28ebb5;break;}}for(let _0x2ebb78 in _0x199090[_0xe2bb56]){if(_0x2ebb78['\x6c\x65\x6e\x67\x74\x68']==0x6&&_0x2ebb78['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x5)==0x6e&&_0x2ebb78['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x0)==0x64){_0x5c5028=_0x2ebb78;break;}}if(!('\x7e'>_0x5c5028)){for(let _0x11fc55 in _0x199090[_0xe2bb56]){if(_0x11fc55['\x6c\x65\x6e\x67\x74\x68']==0x8&&_0x11fc55['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x7)==0x6e&&_0x11fc55['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x0)==0x6c){_0x6a9a74=_0x11fc55;break;}}for(let _0x592a34 in _0x199090[_0xe2bb56][_0x6a9a74]){if(_0x592a34['\x6c\x65\x6e\x67\x74\x68']==0x8&&_0x592a34['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x7)==0x65&&_0x592a34['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](0x0)==0x68){_0x239855=_0x592a34;break;}}}if(!_0xe2bb56||!_0x199090[_0xe2bb56])return;const _0x2cee81=_0x199090[_0xe2bb56][_0x5c5028],_0x292631=!!_0x199090[_0xe2bb56][_0x6a9a74]&&_0x199090[_0xe2bb56][_0x6a9a74][_0x239855],_0x43b932=_0x2cee81||_0x292631;if(!_0x43b932)return;let _0x45e8f8=![];for(let _0x3e59e8=0x0;_0x3e59e8<_0x5c1cd5['\x6c\x65\x6e\x67\x74\x68'];_0x3e59e8++){const _0x17a1c6=_0x5c1cd5[_0x3e59e8],_0xf1e8cb=_0x17a1c6[0x0]===String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0x2e)?_0x17a1c6['\x73\x6c\x69\x63\x65'](0x1):_0x17a1c6,_0x53b48c=_0x43b932['\x6c\x65\x6e\x67\x74\x68']-_0xf1e8cb['\x6c\x65\x6e\x67\x74\x68'],_0x4cad46=_0x43b932['\x69\x6e\x64\x65\x78\x4f\x66'](_0xf1e8cb,_0x53b48c),_0x6480d7=_0x4cad46!==-0x1&&_0x4cad46===_0x53b48c;_0x6480d7&&((_0x43b932['\x6c\x65\x6e\x67\x74\x68']==_0x17a1c6['\x6c\x65\x6e\x67\x74\x68']||_0x17a1c6['\x69\x6e\x64\x65\x78\x4f\x66']('\x2e')===0x0)&&(_0x45e8f8=!![]));}if(!_0x45e8f8)data;else return;_0x23e42f();});_0x35cf3f();const bigStyle='\x63\x6f\x6c\x6f\x72\x3a\x72\x65\x64\x3b\x20\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x36\x30\x70\x78\x3b\x20\x66\x6f\x6e\x74\x2d\x77\x65\x69\x67\x68\x74\x3a\x62\x6f\x6c\x64\x3b\x20\x66\x6f\x6e\x74\x2d\x66\x61\x6d\x69\x6c\x79\x3a\x68\x65\x6c\x76\x65\x74\x69\x63\x61\x2c\x20\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x3b\x20\x74\x65\x78\x74\x2d\x73\x68\x61\x64\x6f\x77\x3a\x20\x31\x70\x78\x20\x31\x70\x78\x20\x32\x70\x78\x20\x62\x6c\x61\x63\x6b\x3b';console['\x6c\x6f\x67']('\x25\x63\x68\x69\x20\x74\x68\x65\x72\x65\x21',bigStyle);const smallStyle='\x63\x6f\x6c\x6f\x72\x3a\x62\x6c\x75\x65\x3b\x20\x66\x6f\x6e\x74\x2d\x73\x69\x7a\x65\x3a\x33\x35\x70\x78\x3b\x20\x66\x6f\x6e\x74\x2d\x66\x61\x6d\x69\x6c\x79\x3a\x68\x65\x6c\x76\x65\x74\x69\x63\x61\x2c\x20\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66\x3b\x20\x74\x65\x78\x74\x2d\x73\x68\x61\x64\x6f\x77\x3a\x20\x31\x70\x78\x20\x31\x70\x78\x20\x32\x70\x78\x20\x62\x6c\x61\x63\x6b\x3b';console['\x6c\x6f\x67']('\x25\x63\x74\x68\x69\x73\x20\x73\x63\x72\x69\x70\x74\x20\x77\x61\x73\x20\x6d\x61\x64\x65\x20\x62\x79\x20\x73\x70\x69\x6e\x2c\x20\x61\x6b\x61\x20\x73\x70\x69\x6e\x66\x61\x6c\x2c\x20\x74\x68\x61\x6e\x6b\x20\x79\x6f\x75\x20\x66\x6f\x72\x20\x75\x73\x69\x6e\x67\x21',smallStyle);
 
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
