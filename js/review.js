const reviewPrev = document.querySelector('.reviews_content_control_prev'),
  reviewNext = document.querySelector('.reviews_content_control_next'),
  reviewsSliderTrack = document.querySelector('.reviews_cards_slider_track'),
  currentSlide = document.querySelector('.reviews_content_slide_current'),
  allSlide = document.querySelector('.reviews_content_slide_all'),
  reviewCard1 = document.querySelector('.reviews_card[data-index="1"]'),
  reviewCard2 = document.querySelector('.reviews_card[data-index="2"]'),
  reviewCard3 = document.querySelector('.reviews_card[data-index="3"]'),
  reviewCard4 = document.querySelector('.reviews_card[data-index="4"]')

let reviewsCard = document.querySelector('.reviews_card'),
  marginLeft = parseInt(getComputedStyle(reviewsCard, true).marginLeft),
  marginRight = parseInt(getComputedStyle(reviewsCard, true).marginRight),
  cardwidth = reviewsCard.offsetWidth + marginLeft + marginRight,
  counter = 0

// -(reviewsCard.offsetWidth + marginLeft + marginRight) * 2
reviewsSliderTrack.style.transform = `translate3d(${counter}px, 0px, 0px)`

if (reviewsSliderTrack.children.length <= 9) {
  allSlide.textContent = `/0${reviewsSliderTrack.children.length}`

} else {
  allSlide.textContent = `/${reviewsSliderTrack.children.length}`
}

let reviewTimerId = setInterval(() => {
  if (+currentSlide.textContent == reviewsSliderTrack.children.length) {
    currentSlide.textContent = '01'
    counter = 0
    reviewsSliderTrack.style.transform = `translate3d(${counter}px, 0px, 0px)`
  } else {
    currentSlide.textContent = `0${+currentSlide.textContent + 1}`

    counter = counter - cardwidth
    reviewsSliderTrack.style.transform = `translate3d(${counter}px, 0px, 0px)`
  }
}, 30000);


reviewPrev.addEventListener('click', () => {
  currentSlide.textContent = `0${+currentSlide.textContent - 1}`
  if (+currentSlide.textContent == '00') {
    currentSlide.textContent = '04'
    counter = -cardwidth * 3
    reviewsSliderTrack.style.transform = `translate3d(${counter}px, 0px, 0px)`
  } else {
    counter = counter + cardwidth
    reviewsSliderTrack.style.transform = `translate3d(${counter}px, 0px, 0px)`
  }
})

reviewNext.addEventListener('click', () => {
  if (+currentSlide.textContent == reviewsSliderTrack.children.length) {
    currentSlide.textContent = '01'
    counter = 0
    reviewsSliderTrack.style.transform = `translate3d(${counter}px, 0px, 0px)`
  } else {
    currentSlide.textContent = `0${+currentSlide.textContent + 1}`

    counter = counter - cardwidth
    reviewsSliderTrack.style.transform = `translate3d(${counter}px, 0px, 0px)`
  }

})


if (window.innerWidth <= 768) {
  const reviewsSliderControl = document.querySelector('.reviews_content_control'),
    reviewsSection = document.querySelector('.reviews')

  reviewsSliderControl.remove()
  reviewsSection.append(reviewsSliderControl)
}

