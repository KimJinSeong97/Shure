// 배너 슬라이드
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
    $('.dot').removeClass('dot_color');
    $('.dot').eq(page).addClass('dot_color');
};

next.onclick = function () {
    page++;
    if (page > document.querySelectorAll('.slide').length - 1) {
        page = document.querySelectorAll('.slide').length - 1
        return;
    }
    sbox.style.marginLeft = -100 * page + 'vw';
    $('.dot').removeClass('dot_color');
    $('.dot').eq(page).addClass('dot_color');
};

$(function () {
    var dot = $('.dot');
    $(dot).click(function () {
        index = $(this).index();
        page = index;
        $(sbox).stop().css({ marginLeft: -100 * index + "vw" });
        $('.dot').removeClass('dot_color');
        $(this).addClass('dot_color');
    })
});

// 사이즈 별 스크립트
if (window.matchMedia('(min-width: 1200px)').matches) {
    // 베스트 셀러 슬라이드
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
    // 스크롤하면 이미지 나오는 이벤트
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

        // 스크롤시 배경 색 그라데이션
        $('.bg_color').css('opacity', 0 + $(window).scrollTop() * 0.3 / 1000);
        $('.bg_img img').css('opacity', 0 + $(window).scrollTop() * 1 / 3500);
    })
} else if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches) {
    // 베스트 셀러 슬라이드
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
            bsbox.style.marginLeft = -51.5 * page + '%';
        };

        next2.onclick = function () {
            page++;
            if (page > document.querySelectorAll('.bs').length - 2) {
                page = document.querySelectorAll('.bs').length - 2;
                return;
            }
            bsbox.style.marginLeft = `${-51.5 * page}%`;
        };
    })
    // 스크롤하면 이미지 나오는 이벤트
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

        // 스크롤시 배경 색 그라데이션
        $('.bg_color').css('opacity', 0 + $(window).scrollTop() * 0.3 / 1000);
        $('.bg_img img').css('opacity', 0 + $(window).scrollTop() * 1 / 3500);
    })
} else {
    // 베스트 셀러 슬라이드
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
            bsbox.style.marginLeft = -49.5 * page + 'vw';
        };

        next2.onclick = function () {
            page++;
            if (page > document.querySelectorAll('.bs').length - 2) {
                page = document.querySelectorAll('.bs').length - 2;
                return;
            }
            bsbox.style.marginLeft = `${-49.5 * page}vw`;
        };
    })

    // 스크롤하면 이미지 나오는 이벤트
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        var scroll_bswrap = $('.bs_wrap').offset().top;
        if (scrolling > scroll_bswrap - 600) {
            $('.bs').css('transform', 'translateY(0px)').css('opacity', 1);
        }

        var scroll_banner1 = $('.banner1').offset().top;
        if (scrolling > scroll_banner1 - 750) {
            $('.ban1').css('opacity', "1").css('transform', 'translateY(0px)');
        }

        if (scrolling > scroll_banner1 - 0) {
            $('.ban2').css('opacity', "1").css('transform', 'translateY(0px)');
        }

        if (scrolling > scroll_banner1 - -900) {
            $('.ban3').css('opacity', "1").css('transform', 'translateY(0px)');
        }

        var scroll_banner2 = $('.banner2').offset().top;
        if (scrolling > scroll_banner2 - 750) {
            $('.ban4').css('opacity', '1').css('transform', 'translateY(0px)');
        }

        if (scrolling > scroll_banner2 - 300) {
            $('.ban5').css('opacity', '1').css('transform', 'translateY(0px)');
        }

        var scroll_banner3 = $('.ban6 img').offset().top;
        if (scrolling > scroll_banner3 - 600) {
            $('.ban6').css('opacity', '1').css('transform', 'translateY(0px)');
        }

        if (scrolling > scroll_banner3 - 0) {
            $('.ban7').css('opacity', '1').css('transform', 'translateY(0px)');
        }

        // 스크롤시 배경 색 그라데이션
        $('.bg_color').css('opacity', 0 + $(window).scrollTop() * 0.3 / 1000);
    })
}
