$('.menu li').mouseenter(function () {
    $(this).children('.sub-menu, .sub-back').stop().slideDown();
});

$('.menu li').mouseleave(function () {
    $(this).children('.sub-menu, .sub-back').stop().slideUp();
});
