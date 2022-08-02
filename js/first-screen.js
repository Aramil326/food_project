const firstScreenButton = document.querySelector('.first-screen_left_button')

firstScreenButton.addEventListener('click', () => {
  document.querySelector('.quiz_select-sex_header').scrollIntoView(true)
})