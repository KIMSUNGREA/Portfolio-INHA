const FRIST_SECTION = 26
const SECTION2_START = 28
const SECTION2_END = 51
const SECTION3_START = 52
const SECTION3_END = 74
const SECTION4_START = 75
const SECTION4_END = 99
const SECTION5 = 100

/* 메인 슬라이드 배너 */
var timer1 = setInterval("auto1()", 3000);
var n1 = 0;

function auto1() {
    n1++;
    if (n1 == 4) {
        n1 = 0;
        $(".mainslide li").first().addClass("zin2").css({
            "opacity": 0
        }).animate({
            "opacity": 1
        }, 1000, function () {
            $(".zin1").removeClass("zin1");
            $(".zin2").attr("class", "zin1");
        });
    } else {
        $(".zin1").next().addClass("zin2").css({
            "opacity": 0
        }).animate({
            "opacity": 1
        }, 1000, function () {
            $(".zin1").removeClass("zin1");
            $(".zin2").attr("class", "zin1");
        });
    }
    $(".page li").removeClass();
    $(".page li").eq(n1).addClass("selecP");
}
$(".page li").click(function () {
    clearInterval(timer1);
    n1 = $(this).index();
    $(".mainslide li").eq(n1).addClass("zin2").css({
        "opacity": 0
    }).animate({
        "opacity": 1
    }, 1000, function () {
        $(".zin1").removeClass("zin1");
        $(".zin2").attr("class", "zin1");
    });
    $(".page li").removeClass();
    $(".page li").eq(n1).addClass("selecP");
    timer1 = setInterval("auto1()", 3000);
});

var spy = 0;
$(".stopbtn a").click(function () {
    if (spy == 0) {
        $(this).addClass("play");
        clearInterval(timer1);
        spy = 1;
    } else {
        $(this).removeClass("play");
        timer1 = setInterval("auto1()", 3000);
        spy = 0;
    }
});
/* page 네비게이션 */
$(".pagefixd ul li").click(function(){
    $(".pagefixd ul li a p").removeClass("active")
    $(".pagefixd ul li a span").removeClass("active")
    $(this).find("p").addClass("active")
    $(this).find("span").addClass("active")
});

$(window).scroll(function() {
    const windowScrollTop = $(window).scrollTop();
    const height = $(document).height() - $(window).height();
    const procent = Math.floor(windowScrollTop / height * 100);
    console.log(procent);


    if (procent <= FRIST_SECTION) {
        $(".pagefixd ul li:nth-child(1) a p, .pagefixd ul li:nth-child(1) a span").addClass("active")
        $(".pagefixd ul li:nth-child(2) a p, .pagefixd ul li:nth-child(2) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(3) a p, .pagefixd ul li:nth-child(3) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(4) a p, .pagefixd ul li:nth-child(4) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(5) a p, .pagefixd ul li:nth-child(5) a span").removeClass("active")
    } else if (procent >= SECTION2_START && procent <= SECTION2_END) {
        $(".pagefixd ul li:nth-child(2) a p, .pagefixd ul li:nth-child(2) a span").addClass("active")
        $(".pagefixd ul li:nth-child(1) a p, .pagefixd ul li:nth-child(1) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(3) a p, .pagefixd ul li:nth-child(3) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(4) a p, .pagefixd ul li:nth-child(4) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(5) a p, .pagefixd ul li:nth-child(5) a span").removeClass("active")
    } else if (procent >= SECTION3_START && procent <= SECTION3_END) {
        $(".pagefixd ul li:nth-child(3) a p, .pagefixd ul li:nth-child(3) a span").addClass("active")
        $(".pagefixd ul li:nth-child(1) a p, .pagefixd ul li:nth-child(1) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(2) a p, .pagefixd ul li:nth-child(2) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(4) a p, .pagefixd ul li:nth-child(4) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(5) a p, .pagefixd ul li:nth-child(5) a span").removeClass("active")
    } else if (procent >= SECTION4_START && procent <= SECTION4_END) {
        $(".pagefixd ul li:nth-child(4) a p, .pagefixd ul li:nth-child(4) a span").addClass("active")
        $(".pagefixd ul li:nth-child(1) a p, .pagefixd ul li:nth-child(1) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(2) a p, .pagefixd ul li:nth-child(2) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(3) a p, .pagefixd ul li:nth-child(3) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(5) a p, .pagefixd ul li:nth-child(5) a span").removeClass("active")
    } else if (procent == SECTION5) {
        $(".pagefixd ul li:nth-child(5) a p, .pagefixd ul li:nth-child(5) a span").addClass("active")
        $(".pagefixd ul li:nth-child(1) a p, .pagefixd ul li:nth-child(1) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(2) a p, .pagefixd ul li:nth-child(2) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(3) a p, .pagefixd ul li:nth-child(3) a span").removeClass("active")
        $(".pagefixd ul li:nth-child(4) a p, .pagefixd ul li:nth-child(4) a span").removeClass("active")
    }
});

$(".scroll_move").click(function(event){         
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 61}, 100);

});


/* cont2 텝메뉴 */
$(".guidetle ul li").click(function () {
    $(this).addClass("chtit").siblings().removeClass("chtit");
});

$(".bidbox").click(function () {
    $(".guide_btn").addClass("efbox");
    $(".bid").addClass("show")
});
$(".mainG").click(function () {
    $(".bid").removeClass("show");
    $(".guide_btn").removeClass("efbox")
});




$(".guide_btn li").click(function () {
    var gn = $(this).index() + 1;
    $(".efbox").removeClass("show");
    $(".gud" + gn + ".efbox").addClass("show");
});
$(".guide_btn > li > a").click(function () {
    $(".guide_btn > li > a").removeClass("puc");
    $(this).addClass("puc")
});

/* cont3 배너 */
var n2 = 0;

$(".c3next").click(function () {
    n2++;
    if (n2 == 3) {
        n2 = 0;
        $("#cont3bnr ul li").first().addClass("ind2").css({
            "opacity": 0
        }).animate({
            "opacity": 1
        }, 1000, function () {
            $(".ind1").removeClass("ind1");
            $(".ind2").attr("class", "ind1");
        });
    } else {
        $(".ind1").next().addClass("ind2").css({
            "opacity": 0
        }).animate({
            "opacity": 1
        }, 1000, function () {
            $(".ind1").removeClass("ind1");
            $(".ind2").attr("class", "ind1");
        });
    }
});

$(".c3prev").click(function () {
    n2--;
    if (n2 < 0) {
        n2 = 2;
        $("#cont3bnr ul li").last().addClass("ind2").css({
            "opacity": 0
        }).animate({
            "opacity": 1
        }, 1000, function () {
            $(".ind1").removeClass("ind1");
            $(".ind2").attr("class", "ind1");
        });
    } else {
        $(".ind1").prev().addClass("ind2").css({
            "opacity": 0
        }).animate({
            "opacity": 1
        }, 1000, function () {
            $(".ind1").removeClass("ind1");
            $(".ind2").attr("class", "ind1");
        });
    }
});

/* cont4box 슬라이드 */
$(".sminframe ul").append($(".sminframe ul li:first-child").clone());
var smin = 0;
$(".sminnext").click(function () {
    smin++;
    if (smin >= 5) {
        $(".sminframe ul").animate({
            "left": -310 * smin
        }, 700, function () {
            $(this).css({
                "left": 0
            });
        })
        smin = 0;
    } else {
        $(".sminframe ul").animate({
            "left": -310 * smin
        }, 700)
    }

});
$(".sminprev").click(function () {
    smin--;
    if (smin < 0) {
        smin = 4;
        $(".sminframe ul").css({
            "left": -310 * (smin + 1)
        });
        $(".sminframe ul").animate({
            "left": -310 * smin
        });
    } else {
        $(".sminframe ul").animate({
            "left": -310 * smin
        }, 700)
    }
});

/* cont5 슬라이드 */
$(".word4slide ul").append($(".word4slide ul li:first-child").clone());

var w = 0;
$(".word4next").click(function () {
    w++;
    if (w >= 5) {
        $(".word4slide ul").animate({
            "left": -w * 100 + "%"
        }, 1200, function () {
            $(this).css({
                "left": 0
            });
        });
        w = 0;
    } else {
        $(".word4slide ul").animate({
            "left": -w * 100 + "%"
        }, 1200);
    }
});
$(".word4prev").click(function () {
    w--;
    if (w < 0) {
        w = 4;
    }
    $(".word4slide ul").animate({
        "left": -w * 100 + "%"
    }, 1200)
});

/* mob 메뉴  */
$(".ck > a").click(function () {
    $(".slideT").slideToggle(300);
    $(".ck").toggleClass("down")
})

/* mob content */
// $(".pagefixd ul li a").click(function () {
//     var sn1 = $(this).attr("href");
//     var st1 = $(sn1).offset().top();
//     $("html").animate({
//         "scrolltop": "st1"
//     }, 700)
// });

// $(window).scroll(function () {
//     var stt = $(this).scrollTop();
//     if (stt == 960) {
//         $(".pagefixd a span").addClass("look");
//         $(".pagefixd li").addClass("bl");
//     }
// })
