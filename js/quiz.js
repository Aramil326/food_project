let quizSections = document.querySelectorAll('.quiz')
// console.log(quizSections)

let buttons = document.querySelectorAll('.buttons button')
// console.log(buttons)

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault()
    // console.log(e.target)
  })
})