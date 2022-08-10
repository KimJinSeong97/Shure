//미츠 슬라이더
var slider = new Swiper(".swiper-container", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 60,
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
    }
})