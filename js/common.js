// 모든 사이즈 공용 스크립트
// 검색 아이콘 클릭 -> 검색 창 슬라이드
$(function () {
    $('#search_button').on('click', function () {
        $('.search').slideToggle(250);
        $('#dark').toggleClass('dark_mode');
    });
    $('nav ul').mouseover(function () {
        $('.search').css('display', 'none');
    });
})

if(window.matchMedia('(min-width: 1200px)').matches) {
    // nav mouseover
    document.querySelector('.mm1').addEventListener('mouseover', function () {
        document.querySelector('.sb1').style.display = 'flex';
        document.querySelector('.sb2').style.display = 'none';
        document.querySelector('.sb3').style.display = 'none';
        document.querySelector('.sb4').style.display = 'none';
        document.querySelector('.sb5').style.display = 'none';
        document.querySelector('#dark').classList.add('dark_mode');
    })
    document.querySelector('.mm2').addEventListener('mouseover', function () {
        document.querySelector('.sb2').style.display = 'flex';
        document.querySelector('.sb1').style.display = 'none';
        document.querySelector('.sb3').style.display = 'none';
        document.querySelector('.sb4').style.display = 'none';
        document.querySelector('.sb5').style.display = 'none';
        document.querySelector('#dark').classList.add('dark_mode');
    })
    document.querySelector('.mm3').addEventListener('mouseover', function () {
        document.querySelector('.sb3').style.display = 'flex';
        document.querySelector('.sb1').style.display = 'none';
        document.querySelector('.sb2').style.display = 'none';
        document.querySelector('.sb4').style.display = 'none';
        document.querySelector('.sb5').style.display = 'none';
        document.querySelector('#dark').classList.add('dark_mode');
    })
    document.querySelector('.mm4').addEventListener('mouseover', function () {
        document.querySelector('.sb4').style.display = 'flex';
        document.querySelector('.sb1').style.display = 'none';
        document.querySelector('.sb2').style.display = 'none';
        document.querySelector('.sb3').style.display = 'none';
        document.querySelector('.sb5').style.display = 'none';
        document.querySelector('#dark').classList.add('dark_mode');
    })
    document.querySelector('.mm5').addEventListener('mouseover', function () {
        document.querySelector('.sb5').style.display = 'flex';
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
        document.querySelector('.sb5').style.display = 'none';
        document.querySelector('#dark').classList.remove('dark_mode');
    })
} else if(window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches) {
    $(function () {
        $('.main_menu').click(function () {
            $(this).children('.sub_menu').toggle();
            $(this).toggleClass('dot_color');
            $(this).children('a').toggleClass('dot_color');
        });

        $('.menu_bar').click(function () {
            $('nav').toggle();
            $('.utility i:nth-of-type(3)').toggle();
        });
    })
} else {
    $(function () {
        $('.main_menu').click(function () {
            $(this).children('.sub_menu').toggle();
            $(this).toggleClass('dot_color');
            $(this).children('a').toggleClass('dot_color');
        });

        $('.menu_bar').click(function () {
            $('nav').toggle();
            $('.utility i:nth-of-type(3)').toggle();
        });
    })
}