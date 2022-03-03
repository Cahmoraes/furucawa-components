const lineBanners = document.querySelector('.c-line-banners')
lineBanners.style.display = 'none'

$( document ).ready(function() {
   $('[data-carousel="line-banners"]').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

lineBanners.style.display = 'block'

});