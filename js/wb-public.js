// Back to top
// function goTop() {
//     $('html,body').animate({
//         'scrollTop': 0
//     }, 1000);
// }
// $(window).scroll(function () {
//     if ($(document).scrollTop() >= 200) {
//         $('#backtop').addClass("show");
//     } else {
//         $('#backtop').removeClass("show");
//     }
// });


//sidebar
$(document).ready(function () {
    $(".rightEcBox .airlinesBox ul li a").mouseover(function () {
        $(this).addClass("animated rotateIn");
    });
    $(".rightEcBox .airlinesBox ul li a").mouseout(function () {
        $(this).removeClass("animated rotateIn");
    });
    $("#elevator").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    $("#favorites").click(function () {
        alert('You can bookmark us by pressing Ctrl + D');
    });
    $(".x").click(function () {
        $(".rightEcBox").stop().toggleClass('on');
    });
});




$(function () {
    var log = console.log.bind();
    $('.home-header .main-btn').click(function(){
        $(this).toggleClass('open');
        if ($(this).is('.open')) {
            $('.home-header .main-nav').slideDown();
        } else {
            $('.home-header .main-nav').slideUp();
        }
    })

    var mobile_btn = '<i class="mobile-navbtn"></i>'
    $('.home-header .nn-menu-f>li,.home-header .nn-menu-s>li').each(function(){
        if($(this).children('.nn-menu-s,.nn-menu-t').length){
            $(this).append(mobile_btn);
        }
    })

    $(document).on("click", ".mobile-navbtn", function (e) {
        if (!$(this).is('.open')) {
            $(this).addClass('open')
            $(this).siblings('.nn-menu-s,.nn-menu-t').slideDown();
        } else {
            $(this).removeClass('open')
            $(this).siblings('.nn-menu-s,.nn-menu-t').slideUp();
        }
        e.preventDefault();
    })

    //二级菜单居中
    $('.header-nav .f-menu>.hasdrop').mouseenter(function () {
        if ($(document).width() > 991) {
            var s_menuX = ($(this).width() - $(this).children('.drop-menu').width()) / 2;
            $(this).children('.drop-menu').css({
                'margin-left': s_menuX
            });
        }
    })
    // $(window).scroll(function () {
    //     if ($(document).scrollTop() > 200 && $(window).width() > 991) {
    //         $('.home-header .navbar').addClass('is-fixed')
    //     } else {
    //         $('.home-header .navbar').removeClass('is-fixed')
    //     }
    // })
})