//slide
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const s_box = document.querySelector('.slide_box');
var s_width = 100;
var s_index = document.querySelectorAll('.slide_box > div');
var i = 0;

next.onclick = function () {
    s_box.style.marginLeft = -s_width * i + 'vw';
    if (i == s_index.length - 1) {
        i = 0;
    } else {
        i++;
    };
};

document.querySelector('.btn1').addEventListener('click', function () {
    document.querySelector('.slide_box').style.transform = 'translate(0vw)';
});

document.querySelector('.btn2').addEventListener('click', function () {
    document.querySelector('.slide_box').style.transform = 'translate(-100vw)';
});

document.querySelector('.btn3').addEventListener('click', function () {
    document.querySelector('.slide_box').style.transform = 'translate(-200vw)';
});

document.querySelector('.btn4').addEventListener('click', function () {
    document.querySelector('.slide_box').style.transform = 'translate(-300vw)';
});

// best seller slide
$(function () {
    var page = 0;
    $('.prev2').click(function () {
        page--;
        if (page < 0) {
            page = 0;
            return;
        }
        $('.bs_box').stop().animate({ marginLeft: -400 * page }, 250)
    })
    $('.next2').click(function () {
        page++;
        if (page > $('.bs_box .bs').length - 3) {
            page = $('.bs_box .bs').length - 3;
            return;
        }
        $('.bs_box').stop().animate({ marginLeft: -400 * page }, 250)
    })
})