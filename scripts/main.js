/**
 * Created by elizabethdabbs on 2/10/16.
 */
jQuery(document).ready(function ($) {
    var pathname = window.location.pathname;
    console.log(pathname);
    if (pathname == '/photos/') {
        $('#nav-photos').addClass('active');
    }
    if (pathname == '/details/') {
        $('#nav-details').addClass('active');
    }
    if (pathname == '/bridal-party/') {
        $('#nav-party').addClass('active');
    }
    if (pathname == '/our-story/') {
        $('#nav-story').addClass('active');
    }
});

