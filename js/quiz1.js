const cards = document.querySelectorAll('.quiz_select-sex_card-box_card')

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.nodeName == "DIV") {
      e.target.classList.toggle('quiz-active')
    } else {
      e.target.parentNode.classList.toggle('quiz-active')
    }
  })
})