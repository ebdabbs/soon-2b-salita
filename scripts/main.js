/**
 * Created by elizabethdabbs on 2/10/16.
 */
jQuery(document).ready(function ($) {
    var pathname = window.location.pathname;
    console.log(pathname);
    if (pathname == '/') {
        $('.nav-home').addClass('active');
    }
    if (pathname == '/photos/') {
        $('.nav-photos').addClass('active');
    }
    if (pathname == '/details/') {
        $('.nav-details').addClass('active');
    }
    if (pathname == '/bridal-party/') {
        $('.nav-party').addClass('active');
    }
    if (pathname == '/our-story/') {
        $('.nav-story').addClass('active');
    }
    if (pathname == '/registry/') {
        $('.nav-registry').addClass('active');
    }
    if (pathname == '/contact/') {
        $('.nav-contact').addClass('active');
    }

    $( "#open-menu" ).click(function() {
        openNav();
    });

    $( "#close-menu" ).click(function() {
        closeNav();
    });

    function openNav() {
        $('.menu-button').addClass('nav-is-visible');
        $('#overlay').addClass('nav-is-visible');
    }

    function closeNav() {
        $('.menu-button').removeClass('nav-is-visible');
        $('#overlay').removeClass('nav-is-visible');
    }
});

