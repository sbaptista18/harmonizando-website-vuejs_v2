/* eslint-disable */
$().ready(function stickyFooter() {
    var totalHeight = $("body").height();
    if ($(window).height() > totalHeight) {
        var marginBanner = parseInt($('.banner').css("margin-top"))
        var routerSection = $("#app > div:not(.menu-container):not(.banner):not(#footer)");
        var routerMarginTop = parseInt($("#app > div:not(.menu-container):not(.banner):not(#footer)").css('margin-top'));
        var routerMarginBottom = parseInt($("#app > div:not(.menu-container):not(.banner):not(#footer)").css('margin-bottom'));

        console.log(totalHeight)

        var minSectionHeight = ($(window).height() - totalHeight) - marginBanner;
        routerSection.css("minHeight", minSectionHeight + "px");
    }
})