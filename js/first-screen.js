const firstScreenButton = document.querySelector('.first-screen_left_button')

firstScreenButton.addEventListener('click', () => {
  document.querySelector('.quiz_select-sex').scrollIntoView(true)
})