// ==UserScript==
// @name         OPGG Anti anti adblocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  disable the pop up block of OPGG
// @author       Duan2baka
// @match      *://www.op.gg/
// @match      *://www.op.gg/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=op.gg
// ==/UserScript==

(function() {
    var intervalId;
    var disablePopUp=false;
    function checkAndClosePopUp(){
        if(disablePopUp){
            clearInterval(intervalId);
            return;
        }
        if(document.getElementsByClassName("fc-close")){
            var event = new Event('click');
            document.getElementsByClassName("fc-close")[0].dispatchEvent(event);
            disablePopUp=true;
        }
    }
    intervalId = setInterval(checkAndClosePopUp, 1);
})();
