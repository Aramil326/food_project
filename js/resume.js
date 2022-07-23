const resumeMoreInfoButtons = document.querySelectorAll('.resume_card-box_card_header img'),
  resumeMoreInfoButtonsClose = document.querySelectorAll('.resume_card-box_card_info img')

resumeMoreInfoButtons.forEach(resumeMoreInfoButton => {
  resumeMoreInfoButton.addEventListener('click', e => {
    e.target.parentNode.parentNode.children[0].style.display = 'flex'
  })
})

resumeMoreInfoButtonsClose.forEach(resumeMoreInfoButtonClose => {
  resumeMoreInfoButtonClose.addEventListener('click', e => {
    e.target.parentNode.parentNode.children[0].style.display = 'none'
  })
})