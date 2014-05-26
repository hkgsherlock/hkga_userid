// ==UserScript==
// @name           HKGA User ID
// @version        201405261200
// @include        https://hkgalden.com/view/*
// @include        http://hkgalden.com/view/*
// @require        http://code.jquery.com/jquery-1.10.2.min.js
// ==/UserScript==

var $jq = jQuery.noConflict();

var namaerinku = $jq("a.name");

if (namaerinku && namaerinku.length > 0) {
	namaerinku.each(function () {
		var jqThis = $jq(this);
		var jqThisUserId = jqThis.attr('data-mid');
        
        $jq("<br/><span style=\"font-family:Courier; color:#999;\">" + jqThisUserId + "</span>").insertAfter(jqThis);
	});
}
