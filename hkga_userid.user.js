// ==UserScript==
// @name           HKGalden User ID Display
// @namespace      https://github.com/hkgsherlock/hkga_userid
// @version        201408020508
// @description    Show User ID in HKGolden. Original idea from HKG's user "Peach".
// @include        https://hkgalden.com/view/*
// @include        http://hkgalden.com/view/*
// @require        http://code.jquery.com/jquery-1.10.2.min.js
// ==/UserScript==

// former name of this userjs : "HKGA User ID"

// Idea from HKG Peach's "HKG Show User ID" userscript
function AppendUseridUnderUsername()
{
    var namaerinku = document.querySelectorAll("a.name:not(.HkgaUserId_UserIdAppended)");

    if (namaerinku && namaerinku.length > 0) {
        Array.prototype.forEach.call(namaerinku, function (node) {
            node.className += " HkgaUserId_UserIdAppended";
            var jqThisUserId = node.attributes["data-mid"].value;
            node.outerHTML += "<br/><span style=\"font-family:Courier; color:#999;\">" + jqThisUserId + "</span>";
        });
    }
}

// when page load
AppendUseridUnderUsername();

// thanks ¤pºÏ©Ç, developer of HKGalden Quote Folder
$(document).ajaxComplete(function (event, xhr, settings) {
    if (settings.url === '/ajax/loadReplies') {
        AppendUseridUnderUsername();
    }
});