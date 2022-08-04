//nav mouseover
document.querySelector('.mm1').addEventListener('mouseover', function () {
    document.querySelector('.sb1').style.display = 'flex';
    document.querySelector('.sb2').style.display = 'none';
    document.querySelector('.sb3').style.display = 'none';
    document.querySelector('.sb4').style.display = 'none';
    document.querySelector('#dark').classList.add('dark_mode');
})
document.querySelector('.mm2').addEventListener('mouseover', function () {
    document.querySelector('.sb2').style.display = 'flex';
    document.querySelector('.sb1').style.display = 'none';
    document.querySelector('.sb3').style.display = 'none';
    document.querySelector('.sb4').style.display = 'none';
    document.querySelector('#dark').classList.add('dark_mode');
})
document.querySelector('.mm3').addEventListener('mouseover', function () {
    document.querySelector('.sb3').style.display = 'flex';
    document.querySelector('.sb1').style.display = 'none';
    document.querySelector('.sb2').style.display = 'none';
    document.querySelector('.sb4').style.display = 'none';
    document.querySelector('#dark').classList.add('dark_mode');
})
document.querySelector('.mm4').addEventListener('mouseover', function () {
    document.querySelector('.sb4').style.display = 'flex';
    document.querySelector('.sb1').style.display = 'none';
    document.querySelector('.sb2').style.display = 'none';
    document.querySelector('.sb3').style.display = 'none';
    document.querySelector('#dark').classList.add('dark_mode');
})
document.querySelector('.mm5').addEventListener('mouseover', function () {
    document.querySelector('.sb4').style.display = 'none';
    document.querySelector('.sb1').style.display = 'none';
    document.querySelector('.sb2').style.display = 'none';
    document.querySelector('.sb3').style.display = 'none';
    document.querySelector('#dark').classList.add('dark_mode');
})
document.querySelector('header').addEventListener('mouseleave', function () {
    document.querySelector('.sb1').style.display = 'none';
    document.querySelector('.sb2').style.display = 'none';
    document.querySelector('.sb3').style.display = 'none';
    document.querySelector('.sb4').style.display = 'none';
    document.querySelector('#dark').classList.remove('dark_mode');
})

//검색 아이콘 클릭 -> 창 오픈
$(function () {
    $('#search_button').on('click', function () {
        $('.search').slideToggle(250);
        $('#dark').toggleClass('dark_mode');
    });
    $('nav ul').mouseover(function () {
        $('.search').css('display', 'none');
    });

    //1199 전 사이즈!!
    $('.main_menu').click(function(){
        $(this).children('.sub_menu').toggle();
        
        $(this).toggleClass('dot_color');
        $(this).children('a').toggleClass('dot_color');
    });

    $('.menu_bar').click(function(){
        $('nav').toggle();
        $('.utility i:nth-of-type(3)').toggle();
    });
})

//slide button event
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sbox = document.querySelector('.slide_box');
var page = 0;

prev.onclick = function () {
    page--;
    if (page < 0) {
        page = 0;
        return;
    }
    sbox.style.marginLeft = -100 * page + 'vw';
};

next.onclick = function () {
    page++;
    if (page > document.querySelectorAll('.slide').length - 1) {
        page = document.querySelectorAll('.slide').length - 1
        return;
    }
    sbox.style.marginLeft = -100 * page + 'vw';
};

$(function () {
    var dot = $('.dot');
    $(dot).click(function () {
        index = $(this).index();
        page = index;
        $(sbox).stop().css({ marginLeft: -100 * index + "vw" });
    })
})

// best seller slide
$(function () {
    var page = 0;
    const prev2 = document.querySelector('.prev2');
    const next2 = document.querySelector('.next2');
    const bsbox = document.querySelector('.bs_box');

    prev2.onclick = function () {
        page--;
        if (page < 0) {
            page = 0;
            return;
        }
        bsbox.style.marginLeft = -400 * page + 'px';
    };

    next2.onclick = function () {
        page++;
        if (page > document.querySelectorAll('.bs').length - 3) {
            page = document.querySelectorAll('.bs').length - 3;
            return;
        }
        bsbox.style.marginLeft = `${-400 * page}px`;
    };
})

//스크롤하면 나타내는 이벤트
$(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    var scroll_bswrap = $('.bs_wrap').offset().top;
    if (scrolling > scroll_bswrap - 600) {
        $('.bs').css('transform', 'translateY(0px)').css('opacity', 1);
    }

    var scroll_banner1 = $('.banner1').offset().top;
    if (scrolling > scroll_banner1 - 300) {
        $('.ban1, .ban2, .ban3').css('opacity', "1").css('transform', 'translateY(0px)');
    }

    var scroll_banner2 = $('.banner2').offset().top;
    if (scrolling > scroll_banner2 - 400) {
        $('.ban4').css('opacity', '1');
        $('.ban5').css('opacity', '1').css('transform', 'translateY(0px)');
    }

    var scroll_banner3 = $('.ban4 img').offset().top;
    if (scrolling > scroll_banner3 - 250) {
        $('.ban6').css('opacity', '1').css('transform', 'translateY(0px)');
    }

    var scroll_banner4 = $('.ban6 img').offset().top;
    if (scrolling > scroll_banner4 - 550) {
        $('.ban7').css('opacity', '1').css('transform', 'translateY(0px)');
    }

    //스크롤시 배경 색 그라데이션
    $('.bg_color').css('opacity', 0 + $(window).scrollTop() * 0.3 / 1000);
    $('.bg_img img').css('opacity', 0 + $(window).scrollTop() * 1 / 3500);
})