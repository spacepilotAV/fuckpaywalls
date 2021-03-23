// ==UserScript==
// @name         Fuck Paywalls
// @version      0.0.1
// @description  Removes adblock prompts and paywalls from news sites
// @author       spv
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function latimespatch() {
        var count = 0;
        var interval = setInterval(function () {
            document.querySelectorAll('.fc-dialog-container').forEach(e => e.remove()); // popup stuff
            document.querySelectorAll('.fc-dialog-overlay').forEach(e => e.remove());   // more popup stuff
            document.querySelectorAll('metering-modal').forEach(e => e.remove());       // other subscribe notification
            document.body.style = "";                                                   // enable scrolling
            if (count++ == 1000) {
                // don't waste CPU after 10 seconds
                clearInterval(interval);
            }
        }, 10);
    }

    function nytimespatch() {
        var count = 0;
        var interval = setInterval(function () {
            /*
             will clean up
             */

            document.querySelectorAll("#gateway-content").forEach(e => e.remove()); /* remove bullshit popup background     */
            document.querySelectorAll(".css-1bd8bfl").forEach(e => e.remove());     /* remove bullshit popup gradient       */
            document.querySelectorAll("[id*='lire-ui']").forEach(e => e.remove());  /* remove bullshit popup clicky thingys */
            document.querySelectorAll('.css-mcm29f').forEach(function(node) {
                /*
                 enable scrolly things
                 */
                node.className = ""
            });
        }, 10);
    }

    function usatodaypatch() {
        var count = 0;
        var interval = setInterval(function () {
            /*
             will clean up
             */
            document.querySelectorAll("[class*='sp_']").forEach(e => e.remove()); /* more jank magic, removes their adblock shit */
            document.body.parentElement.style = ""; // jank hack
        }, 10);
    }

    function patchsite() {
        if (document.domain.indexOf(".latimes.com") != -1) {
            latimespatch();
        }
        if (document.domain.indexOf("nytimes.com") != -1) {
            nytimespatch();
        }
        if (document.domain.indexOf("usatoday.com") != -1) {
           usatodaypatch();
        }


        else {
            // either not a news site or not implemented
        }
    }

    patchsite();
})();
