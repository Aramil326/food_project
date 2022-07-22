const windowOuterWidth = window.outerWidth
if (window.innerWidth <= 768) {
  let quizQuestionsCardBoxCards = document.querySelectorAll('.quiz_questions_card-box_wrap .card')
  let quizQuestionsCardBoxWraps = document.querySelectorAll('.quiz_questions_card-box_wrap')
  quizQuestionsCardBoxWraps.forEach(e => {
    e.remove()
  })

  quizQuestionsCardBoxCards.forEach(e => {
    document.querySelector('.quiz_questions_card-box').append(e);
  })

  document.querySelectorAll('.quiz_questions_meat_card-box').forEach(cardBoxes => {
    cardBoxes.childNodes.forEach(CardBoxesWrap => {
      let CardBoxesWrapCards = []
      if (CardBoxesWrap.childNodes.length !== 0) {
        CardBoxesWrap.childNodes.forEach(CardBoxesWrapCard => {
          if (CardBoxesWrapCard.childNodes.length !== 0) {
            CardBoxesWrapCards.push(CardBoxesWrapCard)
            CardBoxesWrapCard.remove()
          }
        })
        CardBoxesWrapCards.forEach(card => {
          cardBoxes.append(card)
        })
      }
    })
  })

  document.querySelectorAll('.quiz_questions_meat_card-box_wrap').forEach(e => {
    e.remove()
  })
}