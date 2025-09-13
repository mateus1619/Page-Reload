// ==UserScript==
// @name         Page Reload
// @namespace    http://tampermonkey.net/
// @version      2025-09-13
// @description  Page reload
// @author       mateus1619
// @match        https://
// @icon         https://www.google.com/s2/favicons?sz=64&domain=
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    let time = 10000

    setInterval(async ()=>{
        location.reload(true)
    }, time)
})();
