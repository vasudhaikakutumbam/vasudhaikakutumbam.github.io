+function ($) {
    'use strict';
    $('.navbar-collapse ul li a').click(function () {
        /* always close responsive nav after click */
        console.log("jqury method called");
        $('.navbar-toggle:visible').click();
    });
}(jQuery);