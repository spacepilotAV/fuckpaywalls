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
            document.querySelectorAll('.fc-dialog-container').forEach(e => e.remove());
            document.querySelectorAll('.fc-dialog-overlay').forEach(e => e.remove());
            document.querySelectorAll('metering-modal').forEach(e => e.remove());
            document.body.style = "";
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

            document.querySelectorAll("#gateway-content").forEach(e => e.remove());
            document.querySelectorAll(".css-1bd8bfl").forEach(e => e.remove());
            document.querySelectorAll("[id*='lire-ui']").forEach(e => e.remove());
            document.querySelectorAll('.css-mcm29f').forEach(function(node) {
                node.className = ""
            });
        }, 10);
    }

    function patchsite() {
        if (document.domain.indexOf(".latimes.com") != -1) {
            latimespatch();
        }
        if (document.domain.indexOf("nytimes.com") != -1) {
            nytimespatch();
        }

        else {
            // either not a news site or not implemented
        }
    }

    patchsite();
})();
