/* event slide bnr */
var n = 0;
function auto() {
    n++;
    if (n >= 4) { //원래 이미지 갯수
        $(".bnr_slide").animate({"left": -n * 50 + "%"}, 800, function () {
            $(this).css({"left": 0});
        }); //눈속임 부분
        n = 0;
    } else {
        $(".bnr_slide").animate({"left":-n * 50 + "%"}, 800);
    }
    $(".bnr_page li").eq(n).addClass("select").siblings().removeClass("select")
}
var timer = setInterval("auto()", 5000);

$(".next").click(function(){
    auto();
});

$(".prev").click(function(){
    n--;
    if (n < 0) {
        n = 4-1;
        $(".bnr_slide").animate({"left": -n * 50 + "%"}, 800, function () {
            $(this).css({"left": 0});
        });
        n = 3;
    } else {
        $(".bnr_slide").animate({"left":-n * 50 + "%"}, 800);
    }
    $(".bnr_page li").eq(n).addClass("select").siblings().removeClass("select")
});

/*$(".bnr_page li").click(function() {
    $(this).addClass("select").siblings().removeClass("select");
    n = $(this).index();
    $(".slide").animate({"left": -550 * n}, 800);
});*/


$(".bnr_close input").click(function () {
    $("#event").slideUp(300);
});




/* language */
$(".user li:first-child").click(function () {
    $(".lgg").slideDown(300);
});
$(".user li:first-child").on("mouseleave", function () {
    $(".lgg").slideUp(300);
});


/* search & eventC*/
$(".search > a").click(function () {
    $(".sc").slideDown(300);
});
$(".sc .scC").click(function () {
    $(".sc").slideUp(300);
});

$(".eventC a").click(function () {
    $("#event").slideToggle(300);
    $(this).toggleClass("col");
});


/* mob language */
$(".lngB").click(function () {
    $(".lng").slideToggle(300);
});
$(".m_menuC a").click(function () {
    $(".gnb").animate({
        "right": "-999px"
    }, 300);
    $("#sd").removeClass("bgshow");
});


/* mob smv1 Toggle slide */
$(".smv1 li").click(function () {
    if (bw <= 800) {
        $(this).find(".smv2").slideToggle(300);
    } else {

    }
});


/* usermenu */
$(".usermenu a").click(function () {
    $(".userSmenu").slideDown(300);

});
$(".userCl a").click(function () {
    $(".userSmenu").slideUp(300);
});

$(".cs li").click(function () {
    var usm = $(this).index() + 1;
    console.log(usm);
    $(".cs" + usm).addClass("show").siblings().removeClass("show");
    $(".cs li a").removeClass();
    $(this).find("a").addClass("act"+usm);
});




var bw = $("body").width();
$(window).resize(function () {
    bw = $("body").width();
});

$(".gnb li").click(function () {

    if (bw >= 800) {
        var sm = $(this).index() + 1;
        $(".et").removeClass("on");
        $(".submenu" + sm + ".et").addClass("on");
        $(".snb_Mclose").addClass("show");
        $("#sd").addClass("bgshow");
    } else {
        var sm = $(this).index() + 1;
        $(".et").removeClass("on");
        $(".submenu" + sm + ".et").addClass("on").animate({
            "right": "0"
        }, 200);
        $("#sd").addClass("bgshow");
    }
});

$(".snb_Mclose a").click(function () {
    $(".et").removeClass("on");
    $(".snb_Mclose").removeClass("show")
    $("#sd").removeClass("bgshow")
});


$(window).scroll(function () {
    var sc = $(this).scrollTop();
    if (sc >= 1) {
        $("#gnb").addClass("gnbF")
    } else {
        $("#gnb").removeClass("gnbF")
    }
});

$(".mobmenu a").click(function () {
    $(".gnb").animate({
        "right": "0"
    }, 300)
});


$(".mobsrc a").click(function () {
    $(".Msc").slideDown(300);
});
$(".shc .MscC").click(function () {
    $(".Msc").slideUp(300);
});
