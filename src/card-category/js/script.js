const carouselCardCategory = $('[data-carousel="card-category"]')

handleResize()
window.addEventListener('resize', handleResize)

function handleResize() {
  const isMobile = window.matchMedia('(max-width: 480px)').matches
  if (isMobile) {
    if (!carouselCardCategory.hasClass('slick-initialized')) {
      initializeCarousel()
    }
  } else {
    if (carouselCardCategory.hasClass('slick-initialized')) {
      carouselCardCategory.slick('unslick')
    }
    carouselCardCategory.removeClass('slick-initialized')
  }
}

function initializeCarousel() {
  $('[data-carousel="card-category"]').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })
}

