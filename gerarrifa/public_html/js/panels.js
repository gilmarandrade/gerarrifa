function initPanels() {
    resizeLayout();
    $(window).resize(resizeLayout);

    $("#nav_button").click(toggleNav);
    $("#nav_curtain").click(closeNav);

    $("#btAside").click(toggleAside);
    $("#btCloseAside").click(closeAside);

    $("main").scroll(scroll);
    $('#top-button').on('click', backToTop);
}

function resizeLayout() {
    if ($(window).width() >= 1280) {
    } else {
    }
}

function scroll() {
    var offset = 300; // browser window scroll (in pixels) after which the "back to top" link is shown
    if ($(this).scrollTop() > offset) {
        $('#top-button').addClass('top-button--visible');
    } else {
        $('#top-button').removeClass('top-button--visible');
    }
}

function backToTop() {
    $('main').animate({scrollTop: 0}, 700);
}

function toggleNav() {
    $("body").toggleClass("nav--opened");
    $("body").toggleClass("nav--closed");
}
function closeNav() {
    $("body").removeClass("nav--opened");
    $("body").addClass("nav--closed");
}
function openNav() {
    $("body").addClass("nav--opened");
    $("body").removeClass("nav--closed");
}

function toggleAside() {
    $("body").toggleClass("aside--opened");
}
function openAside() {
    $("body").addClass("aside--opened");
}
function closeAside() {
    $("body").removeClass("aside--opened");
}