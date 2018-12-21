import $ from 'jquery';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.css';


$(document).ready(function(){

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    var video = document.getElementById('video');
    $('.btn-play').click(function(){
        if (video.paused) {
            $(this)
                .removeClass('play')
                .addClass('pause')
                .text('Pause')
            ;

            video.play();
        } else {
            $(this)
                .removeClass('pause')
                .addClass('play')
                .text('Play')
            ;

            video.pause();
        }
    });
});
