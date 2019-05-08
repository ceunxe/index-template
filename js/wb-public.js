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


//-------------------- addthis.js --------------------//
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
//---------- end ----------//



$(function () {
    var log = console.log.bind();
    //手机端导航单按钮
    $('.home-header .main-btn').click(function(){
        $(this).toggleClass('open');
        if ($(this).is('.open')) {
            $('.home-header .main-nav').slideDown();
        } else {
            $('.home-header .main-nav').slideUp();
        }
    })
    //手机端导航图标
    var mobile_btn = '<i class="mobile-navbtn"></i>'
    $('.home-header .nn-menu-f>li,.home-header .nn-menu-s>li').each(function(){
        if($(this).children('.nn-menu-s,.nn-menu-t').length){
            $(this).append(mobile_btn);
        }
    })
    //手机端导航收缩
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

    
    //PC菜单固定
    $(window).scroll(function () {
        if ($(document).scrollTop() > 30 && $(window).width() > 991) {
            var dom_h =  $('.home-header .nav-main').addClass('is-fixed').parent();
            $('.home-header .nav-main').addClass('is-fixed');
            $('.home-header').css('height',dom_h);
        } else {
            $('.home-header .nav-main').removeClass('is-fixed')
        }
    })
})