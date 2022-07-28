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