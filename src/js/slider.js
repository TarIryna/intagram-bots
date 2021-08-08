$(document).ready(function () {
        $('.carousel').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.carousel__nav',
        });
        $('.carousel__nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.carousel',
          dots: false,
          centerMode: false,
          focusOnSelect: true,
        });
      });