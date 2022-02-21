$('[data-carousel="line-banner"]').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 3,
  dots: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
  ]
})