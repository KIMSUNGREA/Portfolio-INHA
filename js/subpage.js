/* mimu */
$(".mimu li a").click(function () {
    $(this).next(".topsub").slideToggle(300);
    $(this).toggleClass("dwc");
});




/* ngb */
$(".mngb li a").click(function () {
    $(".sngb").slideUp(300);
    $(".sngb2").slideUp(300);
    $(this).next().slideDown(300);
    $(".mngb li a").removeClass("cks");
    $(this).addClass("cks");
});




/* bdicon */
$(".bdicon li:first-child a").click(function () {
    $(".url").slideDown(300);
});
$(".url > a").click(function () {
    $(".url").slideUp(300);
});

$(".bdicon li:nth-child(2) a").click(function () {
    $(".fvw").slideDown(300);
});
$(".fvw > a").click(function () {
    $(".fvw").slideUp(300);
});
