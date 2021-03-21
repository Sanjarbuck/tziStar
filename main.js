const galleryThumbs = new Swiper('.gallery-thumbs', {
  slidesPerView: 5,
  centeredSlidesBounds: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'horizontal',
  spaceBetween: 20,
  breakpoints: {
    470: {
      slidesPerView: 7,
      spaceBetween: 7,
      direction: 'vertical'
    }
  }
})

const galleryMain = new Swiper('.gallery-main', {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  }
})

galleryMain.on('slideChangeTransitionStart', function () {
  galleryThumbs.slideTo(galleryMain.activeIndex)
})

galleryThumbs.on('transitionStart', function () {
  galleryMain.slideTo(galleryThumbs.activeIndex)
})

const $body = document.querySelector('body')

$body.addEventListener('click', e => {
  if (e.target.classList.contains('js-toggle')) {
    $body.classList.toggle(e.target.dataset.bodyClass)

    return
  }

  if (e.target.classList.contains('js-tab-title')) {
    document.querySelectorAll('.js-tab-is-active').forEach(elem => {
      elem.classList.remove('js-tab-is-active')
    })

    const tabContentId = e.target.dataset.tabContentId

    e.target.classList.add('js-tab-is-active')
    document.getElementById(tabContentId).classList.add('js-tab-is-active')
  }
})
