//nav hover, search click
const main_menu1 = document.querySelector('.mm1');
const sub_menu1 = document.querySelector('.sb1');
const main_menu2 = document.querySelector('.mm2');
const sub_menu2 = document.querySelector('.sb2');
const main_menu3 = document.querySelector('.mm3');
const sub_menu3 = document.querySelector('.sb3');
const main_menu4 = document.querySelector('.mm4');
const sub_menu4 = document.querySelector('.sb4');

main_menu1.addEventListener('mouseover', function () {
    sub_menu1.style.display = 'flex';
});
main_menu2.addEventListener('mouseover', function () {
    sub_menu2.style.display = 'flex';
});
main_menu3.addEventListener('mouseover', function () {
    sub_menu3.style.display = 'flex';
});
main_menu4.addEventListener('mouseover', function () {
    sub_menu4.style.display = 'flex';
});

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