$('[data-carousel="product-with-image"]').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 760,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 491,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 490,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
})