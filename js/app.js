jQuery(document).ready(function($) {

  $(document).foundation();

  if($('form#contact_form').length > 0) {
    $('form#contact_form').validate({
      messages: { },
      submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: 'send.php',
          data: $(form).serialize(),
          success: function(data) {
            if(data.match(/success/)) {
              $(form).trigger('reset');
              $('#thanks').show().fadeOut(5000);
            }
          }
        });
        return false;
      }
    });
  }

  new WOW().init();

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
    autoplay: false,
    pauseOnHover: false,
    dots: true,
    speed: 1000,
    arrows: false
  });

  // var header_width = $('.work-header h1').width();
  // $('.work-header h1').css({
  //   // "margin-left": - header_width / 2
  // });





});