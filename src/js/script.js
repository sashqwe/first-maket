$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        prevArrow: '<button type="button" class="carousel__prev">&larr;</button>',
        nextArrow: '<button type="button" class="carousel__next">&rarr;</button>',
        // dotsClass: 'carousel__dots',
    });

    $('.modal__close').on('click', function(){
        $('.fade, #pet, #pets').fadeOut('slow');
    });
    $('.pets__button').on('click',function(){
        $('.fade, #pets').fadeIn('slow');
    });

    $('.carousel__button').each(function(i){
        $(this).on('click', function(){
            $('#pet .modal__title').text($('.carousel__name').eq(i).text());
            $('.fade, #pet').fadeIn('slow');
        });
    });

  });


