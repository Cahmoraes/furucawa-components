const SELECTOR = '[data-carousel="line-products"]'

$(SELECTOR).slick({
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
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

function initLineProductsTransitionAnimation() {
  const container = document.querySelector(SELECTOR)
  if (!container) return
  container.addEventListener('mouseover', (event) => {
    const target = event.target
    if (target.classList.contains('c-line-products__item')) {
      changeImg(target)
      target.addEventListener('mouseleave', mouseOutSide)
    }
  })
}


function changeImg(target, reverse = false) {
  const img = target.querySelector('img')
  if (reverse) {
    img.src = img.dataset.blur
  } else {
    img.src = img.dataset.hover
  }
}

function mouseOutSide(event) {
  const target = event.currentTarget
  if (target.contains(target.querySelector('img'))) {
    changeImg(target, true)
    target.removeEventListener('mouseleave', mouseOutSide)
  }
}

initLineProductsTransitionAnimation()