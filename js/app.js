jQuery(document).ready(function($) {

  $(document).foundation();


  $('.menu-toggler a').click(function(e) {
    e.preventDefault();
    $('header').toggleClass('on');
  });

  $('.clients').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slides').slick({
    autoplay: true,
    pauseOnHover: false,
    dots: false,
    speed: 250,
	fade: true,
    arrows: false
  });
  



});