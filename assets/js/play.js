// $('.carrossel')[0].slick.refresh()

// $('.carrossel').slick('refresh');

$(window).on('orientationchange', function() {
  $('.carrossel').slick('resize');
});

$('.carrossel').not('.slick-initialized').slick();

$(".carrossel").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,    
  autoplay: true,
  autoplaySpeed: 4000,
  centerPadding: '4px',
  mobileFirst: true,
  pauseOnHover: true,
  touchMove: true,
  lazyLoad: 'progressive',
});

// lazyLoad: 'ondemand',