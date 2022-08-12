// 미츠 아티스트 슬라이더
var slider = new Swiper(".swiper-container", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    on: {
        slideChange: function () {
            if (this.activeIndex == 0) {
                $('.intro_text_btm b').html('KILL OR BE KILLED');
                $('.intro_text_btm p').html('Live at the Rome Olympic Stadium (2022)');
                $('#meets_intro').css('background', 'linear-gradient(135deg, rgb(115 60 60), rgb(0,0,0) 66.6%)');
                $('.slide1 video').css('display', 'block');
                $('.slide1 img').css('display', 'none');
                $('.slide2 img, .slide3 img, .slide4 img, .slide5 img').css('display', 'block');
                $('.slide2 video, .slide3 video, .slide4 video, .slide5 video').css('display', 'none');
            } else if (this.activeIndex == 1) {
                $('.intro_text_btm b').html('WILL OF THE PEOPLE');
                $('.intro_text_btm p').html('The new single out now (06/01)');
                $('#meets_intro').css('background', 'linear-gradient(115deg, rgb(209 82 41), rgb(0,0,0) 85.6%)');
                $('.slide2 video').css('display', 'block');
                $('.slide2 img').css('display', 'none');
                $('.slide1 img, .slide3 img, .slide4 img, .slide5 img').css('display', 'block');
                $('.slide1 video, .slide3 video, .slide4 video, .slide5 video').css('display', 'none');
            } else if (this.activeIndex == 2) {
                $('.intro_text_btm b').html('NEW KIND OF KICK');
                $('.intro_text_btm p').html('Five years since we dropped this cover of New Kind of Kick for Halloween.');
                $('#meets_intro').css('background', 'linear-gradient(125deg, rgb(60 60 60), rgb(0,0,0) 45.5%)');
                $('.slide3 video').css('display', 'block');
                $('.slide3 img').css('display', 'none');
                $('.slide1 img, .slide2 img, .slide4 img, .slide5 img').css('display', 'block');
                $('.slide1 video, .slide2 video, .slide4 video, .slide5 video').css('display', 'none');
            } else if (this.activeIndex == 3) {
                $('.intro_text_btm b').html("WON'T STAND DOWN");
                $('.intro_text_btm p').html('The new single out now (01/14)');
                $('#meets_intro').css('background', 'linear-gradient(160deg, rgb(78 164 209), rgb(0,0,0) 62.6%)');
                $('.slide4 video').css('display', 'block');
                $('.slide4 img').css('display', 'none');
                $('.slide1 img, .slide2 img, .slide3 img, .slide5 img').css('display', 'block');
                $('.slide1 video, .slide2 video, .slide3 video, .slide5 video').css('display', 'none');
            } else if (this.activeIndex == 4) {
                $('.intro_text_btm b').html('BREAK IT TO ME');
                $('.intro_text_btm p').html('Live at Later with jools holland (2021)');
                $('#meets_intro').css('background', 'linear-gradient(165deg, rgb(45 60 180), rgb(0,0,0) 70.6%)');
                $('.slide5 video').css('display', 'block');
                $('.slide5 img').css('display', 'none');
                $('.slide1 img, .slide2 img, .slide3 img, .slide4 img').css('display', 'block');
                $('.slide1 video, .slide2 video, .slide3 video, .slide4 video').css('display', 'none');
            }
        }
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});

// 콜라보 동영상 재생
$(function () {
    $('.img1').click(function () {
        $('.video1, .close').css('display', 'block');
        $('.video1').attr('src', 'https://www.youtube.com/embed/om2pQDgteas?autoplay=1&mute=1');
    })
    $('.img2').click(function () {
        $('.video2, .close').css('display', 'block');
        $('.video2').attr('src', 'https://www.youtube.com/embed/WzP1EDGEiE0?autoplay=1&mute=1');
    })
    $('.img3').click(function () {
        $('.video3, .close').css('display', 'block');
        $('.video3').attr('src', 'https://www.youtube.com/embed/sBl4JV-7su0?autoplay=1&mute=1');
    })
    $('.close').click(function () {
        $('.collabo_video iframe').css('display', 'none');
        $('.close').css('display', 'none');
    })
})

$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var meets = $('#meets').offset().top;
    var interview = $('#interview').offset().top;
    var collabo = $('#collabo').offset().top;

    if (scrolling > meets - 550) {
        $('#meets .inner h2, .inner p').css('transform', 'translateY(0px)').css('opacity', 1);
    }
    if (scrolling > meets - 200) {
        $('#meets .inner li').css('transform', 'translateY(0px)').css('opacity', 1);
    }

    if (scrolling > interview - 800) {
        $('.interview_logo, #interview').css('transform', 'translateY(0px)').css('opacity', 1);
    }
    if (scrolling > interview - 500) {
        $('.interview_img').css('transform', 'translateY(0px)').css('opacity', 1);
    }
    if (scrolling > interview - 300) {
        $('#interview .inner li').css('transform', 'translateY(0px)').css('opacity', 1);
    }

    if (scrolling > collabo - 400) {
        $('.collabo_logo h2, .collabo_logo h3').css('transform', 'translateY(0px)').css('opacity', 1);
    }
    if (scrolling > collabo - 200) {
        $('.collabo_logo p').css('transform', 'translateY(0px)').css('opacity', 1);
    }
    if (scrolling > collabo - 0) {
        $('.collabo_video .img1, .img2, .img3, h4').css('transform', 'translateY(0px)').css('opacity', 1);
    }
})