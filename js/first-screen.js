const firstScreenButton = document.querySelector('.first-screen_left_button')

firstScreenButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    document.querySelector('.quiz_select-sex').scrollIntoView(true)
  } else {
    document.querySelector('.quiz_select-sex_header').scrollIntoView(true)
  }
})