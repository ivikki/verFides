import $ from 'jquery';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.css';


$(document).ready(function(){

    var slider = $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        fade: true
    });

    $('.btn-play').click(function(){
        if ($(this).hasClass('pause')) {
            $(this)
                .removeClass('pause')
                .addClass('play')
                .text('Play')
            ;

            slider.slick('slickPause');
        } else {
            $(this)
                .removeClass('play')
                .addClass('pause')
                .text('Pause')
            ;

            slider.slick('slickPlay');
        }
    });
});
