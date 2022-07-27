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

//검색 버튼 클릭창
$(function () {
    $('#search_button').click(function () {
        $('.search').slideToggle(250);
        $('#dark').toggleClass('dark_mode');
    })
})


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
    }
}

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
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
const bsbox = document.querySelector('.bs_box');
var page = 0;

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