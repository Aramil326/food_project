const quizScreen1 = document.querySelector('#quiz_1'),
  quizScreen2 = document.querySelector('#quiz_2'),
  quizScreen3 = document.querySelector('#quiz_3'),
  quizScreen4 = document.querySelector('#quiz_4'),
  quizScreen5 = document.querySelector('#quiz_5'),
  quizScreen6 = document.querySelector('#quiz_6'),
  quizScreen7 = document.querySelector('#quiz_7'),
  quizScreen8 = document.querySelector('#quiz_8'),
  quizScreen9 = document.querySelector('#quiz_9'),
  quizScreen10 = document.querySelector('#quiz_10')

// Первая секция
const cardMan = document.querySelector('.quiz_select-sex_card-box_card[data-sex="man"]'),
  cardWoman = document.querySelector('.quiz_select-sex_card-box_card[data-sex="woman"]'),
  quiz1ButtonNext = document.querySelector('#quiz_1 .buttons .next')

quizSelectSexHeader = document.querySelector('.quiz_select-sex_header')

let flagMan = false,
  flagWoman = false

cardMan.addEventListener('click', () => {
  if (!flagMan && !flagWoman) {
    flagMan = true
    cardMan.classList.add('quiz-active')
    cardMan
  } else if (flagMan && !flagWoman) {
    flagMan = false
    cardMan.classList.remove('quiz-active')
  } else if (!flagMan && flagWoman) {
    flagMan = true
    cardMan.classList.add('quiz-active')
    flagWoman = false
    cardWoman.classList.remove('quiz-active')
  }
})

cardWoman.addEventListener('click', () => {
  if (!flagMan && !flagWoman) {
    flagWoman = true
    cardWoman.classList.add('quiz-active')
  } else if (!flagMan && flagWoman) {
    flagWoman = false
    cardWoman.classList.remove('quiz-active')
  } else if (flagMan && !flagWoman) {
    flagWoman = true
    cardWoman.classList.add('quiz-active')
    flagMan = false
    cardMan.classList.remove('quiz-active')
  }
})

quiz1ButtonNext.addEventListener('click', () => {
  if (flagMan || flagWoman) {
    console.log('alert')
    quizScreen1.style.display = 'none'
    quizScreen2.style.display = 'flex'
  } else {
    quizSelectSexHeader.style.color = 'red'
    setTimeout(() => {
      quizSelectSexHeader.style.color = '#585858'
    }, 1000);
  }
})

// Вторая секция
const quizQuestionsHeader = document.querySelector('.quiz_questions_header'),
  questionsCards = document.querySelectorAll('.quiz_questions_card-box_wrap .card'),
  quiz2ButtonPrev = document.querySelector('#quiz_2 .buttons .previous'),
  quiz2ButtonNext = document.querySelector('#quiz_2 .buttons .next')

questionsCards.forEach(card => {
  card.addEventListener('click', () => {
    questionsCards.forEach(card => {
      if (card.classList.contains('quiz-active')) {
        card.classList.remove('quiz-active')
      }
    })
    card.classList.toggle('quiz-active')
  })
})

quiz2ButtonPrev.addEventListener('click', () => {
  quizScreen1.style.display = 'flex'
  quizScreen2.style.display = 'none'
})

quiz2ButtonNext.addEventListener('click', () => {
  let flag = false
  questionsCards.forEach(card => {
    if (card.classList.contains('quiz-active')) {
      quizScreen2.style.display = 'none'
      quizScreen3.style.display = 'flex'
    } else {
      flag = true
    }
  })
  if (flag) {
    quizQuestionsHeader.style.color = 'red'
    setTimeout(() => {
      quizQuestionsHeader.style.color = '#585858'
    }, 1000);
  }
})

// Третья секция

const quiz3Header = document.querySelector('#quiz_3 .quiz_questions_meat_wrap .quiz_questions_meat_header'),
  quiz3Cards = document.querySelectorAll('#quiz_3 .quiz_questions_meat_card-box .quiz_questions_meat_card-box_wrap .card'),
  quiz3ButtonPrev = document.querySelector('#quiz_3 .buttons .previous'),
  quiz3ButtonNext = document.querySelector('#quiz_3 .buttons .next')

quiz3Cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('quiz-active')
    if (quiz3Cards[5].classList.contains('quiz-active')) {
      for (let i = 0; i < quiz3Cards.length - 1; i++) {
        quiz3Cards[i].classList.remove('quiz-active')
      }
    }
  })
})

quiz3ButtonPrev.addEventListener('click', () => {
  quizScreen2.style.display = 'flex'
  quizScreen3.style.display = 'none'
})

quiz3ButtonNext.addEventListener('click', () => {
  let flag = false
  quiz3Cards.forEach(card => {
    if (card.classList.contains('quiz-active')) {
      quizScreen3.style.display = 'none'
      quizScreen4.style.display = 'flex'
    } else {
      flag = true
    }
  })
  if (flag) {
    quiz3Header.style.color = 'red'
    setTimeout(() => {
      quiz3Header.style.color = '#585858'
    }, 1000);
  }
})

// Четвертая секция
const quiz4Header = document.querySelector('#quiz_4 .quiz_questions_meat_wrap .quiz_questions_meat_header'),
  quiz4Cards = document.querySelectorAll('#quiz_4 .quiz_questions_meat_card-box .quiz_questions_meat_card-box_wrap .card'),
  quiz4ButtonPrev = document.querySelector('#quiz_4 .buttons .previous'),
  quiz4ButtonNext = document.querySelector('#quiz_4 .buttons .next')

quiz4Cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('quiz-active')
    if (quiz4Cards[5].classList.contains('quiz-active')) {
      for (let i = 0; i < quiz4Cards.length - 1; i++) {
        quiz4Cards[i].classList.remove('quiz-active')
      }
    }
  })
})

quiz4ButtonPrev.addEventListener('click', () => {
  quizScreen3.style.display = 'flex'
  quizScreen4.style.display = 'none'
})

quiz4ButtonNext.addEventListener('click', () => {
  let flag = false
  quiz4Cards.forEach(card => {
    if (card.classList.contains('quiz-active')) {
      quizScreen4.style.display = 'none'
      quizScreen5.style.display = 'flex'
    } else {
      flag = true
    }
  })
  if (flag) {
    quiz4Header.style.color = 'red'
    setTimeout(() => {
      quiz4Header.style.color = '#585858'
    }, 1000);
  }
})

// Пятая секция
const quiz5Header = document.querySelector('#quiz_5 .quiz_questions_meat_wrap .quiz_questions_meat_header'),
  quiz5Cards = document.querySelectorAll('#quiz_5 .quiz_questions_meat_card-box .quiz_questions_meat_card-box_wrap .card'),
  quiz5ButtonPrev = document.querySelector('#quiz_5 .buttons .previous'),
  quiz5ButtonNext = document.querySelector('#quiz_5 .buttons .next')

quiz5Cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('quiz-active')
    if (quiz5Cards[5].classList.contains('quiz-active')) {
      for (let i = 0; i < quiz5Cards.length - 1; i++) {
        quiz5Cards[i].classList.remove('quiz-active')
      }
    }
  })
})

quiz5ButtonPrev.addEventListener('click', () => {
  quizScreen4.style.display = 'flex'
  quizScreen5.style.display = 'none'
})

quiz5ButtonNext.addEventListener('click', () => {
  let flag = false
  quiz5Cards.forEach(card => {
    if (card.classList.contains('quiz-active')) {
      quizScreen5.style.display = 'none'
      quizScreen6.style.display = 'flex'
    } else {
      flag = true
    }
  })
  if (flag) {
    quiz5Header.style.color = 'red'
    setTimeout(() => {
      quiz5Header.style.color = '#585858'
    }, 1000);
  }
})

// Шестая секция
const quiz6Header = document.querySelector('#quiz_6 .quiz_questions_meat_wrap .quiz_questions_meat_header'),
  quiz6Cards = document.querySelectorAll('#quiz_6 .quiz_questions_meat_card-box .quiz_questions_meat_card-box_wrap .card'),
  quiz6ButtonPrev = document.querySelector('#quiz_6 .buttons .previous'),
  quiz6ButtonNext = document.querySelector('#quiz_6 .buttons .next')

quiz6Cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('quiz-active')
    if (quiz6Cards[5].classList.contains('quiz-active')) {
      for (let i = 0; i < quiz6Cards.length - 1; i++) {
        quiz6Cards[i].classList.remove('quiz-active')
      }
    }
  })
})

quiz6ButtonPrev.addEventListener('click', () => {
  quizScreen5.style.display = 'flex'
  quizScreen6.style.display = 'none'
})

quiz6ButtonNext.addEventListener('click', () => {
  let flag = false
  quiz6Cards.forEach(card => {
    if (card.classList.contains('quiz-active')) {
      quizScreen6.style.display = 'none'
      quizScreen7.style.display = 'flex'
    } else {
      flag = true
    }
  })
  if (flag) {
    quiz6Header.style.color = 'red'
    setTimeout(() => {
      quiz6Header.style.color = '#585858'
    }, 1000);
  }
})

// Седьмая секция
const quiz7Header = document.querySelector('#quiz_7 .quiz_questions_meat_wrap .quiz_questions_meat_header'),
  quiz7Cards = document.querySelectorAll('#quiz_7 .quiz_questions_meat_card-box .quiz_questions_meat_card-box_wrap .card'),
  quiz7ButtonPrev = document.querySelector('#quiz_7 .buttons .previous'),
  quiz7ButtonNext = document.querySelector('#quiz_7 .buttons .next')

quiz7Cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('quiz-active')
    if (quiz7Cards[5].classList.contains('quiz-active')) {
      for (let i = 0; i < quiz7Cards.length - 1; i++) {
        quiz7Cards[i].classList.remove('quiz-active')
      }
    }
  })
})

quiz7ButtonPrev.addEventListener('click', () => {
  quizScreen6.style.display = 'flex'
  quizScreen7.style.display = 'none'
})

quiz7ButtonNext.addEventListener('click', () => {
  let flag = false
  quiz7Cards.forEach(card => {
    if (card.classList.contains('quiz-active')) {
      quizScreen7.style.display = 'none'
      quizScreen8.style.display = 'flex'
    } else {
      flag = true
    }
  })
  if (flag) {
    quiz7Header.style.color = 'red'
    setTimeout(() => {
      quiz7Header.style.color = '#585858'
    }, 1000);
  }
})

// Восьмая секция
const quiz8Header = document.querySelector('#quiz_8 .parametrs_wrap .parametrs_header'),
  quiz8Inputs = document.querySelectorAll('.parametrs_form_input'),
  quiz8ButtonPrev = document.querySelector('#quiz_8 .buttons .previous'),
  quiz8ButtonNext = document.querySelector('#quiz_8 .buttons .next')

quiz8Inputs[0].addEventListener('change', (e) => {
  console.log(e.target.value)
  if (e.target.value < 5 || e.target.value > 100) {
    e.target.style.border = '1px solid red'
    setTimeout(() => {
      e.target.style.border = '1px solid #585858'
      e.target.value = ''
    }, 1000)
  } else {
    e.target.style.border = '1px solid green'
  }
})

quiz8Inputs[1].addEventListener('change', (e) => {
  console.log(e.target.value)
  if (e.target.value < 30) {
    e.target.style.border = '1px solid red'
    setTimeout(() => {
      e.target.style.border = '1px solid #585858'
      e.target.value = ''
    }, 1000)
  } else {
    e.target.style.border = '1px solid green'
  }
})

quiz8Inputs[2].addEventListener('change', (e) => {
  console.log(e.target.value)
  if (e.target.value < 110 || e.target.value > 250) {
    e.target.style.border = '1px solid red'
    setTimeout(() => {
      e.target.style.border = '1px solid #585858'
      e.target.value = ''
    }, 1000)
  } else {
    e.target.style.border = '1px solid green'
  }
})

quiz8Inputs[3].addEventListener('change', (e) => {
  console.log(e.target.value)
  if (e.target.value < 30) {
    e.target.style.border = '1px solid red'
    setTimeout(() => {
      e.target.style.border = '1px solid #585858'
      e.target.value = ''
    }, 1000)
  } else {
    e.target.style.border = '1px solid green'
  }
})

function analysis() {
  var bar = new ProgressBar.Circle(progressBar, {
    color: '#2DC747',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 10000,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#2DC747', width: 1 },
    to: { color: '#2DC747', width: 4 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(`${value}%`);
      }

    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';

  bar.animate(1)

  const checkpoint1 = document.querySelector('.checkpoints li img[data-check="1"]'),
    checkpoint2 = document.querySelector('.checkpoints li img[data-check="2"]'),
    checkpoint3 = document.querySelector('.checkpoints li img[data-check="3"]'),
    checkpoint4 = document.querySelector('.checkpoints li img[data-check="4"]')



  function checkpointsRotate(checkpoint) {
    let start = Date.now();

    let timer = setInterval(function () {
      let timePassed = Date.now() - start;

      checkpoint.style.transform = `rotate(${timePassed / 5}deg)`;

      if (timePassed > 2500) {
        clearInterval(timer)
        checkpoint.style.transform = `rotate(0deg)`;
        checkpoint.src = 'img/check.png'
      }
    }, 20);
  }

  checkpointsRotate(checkpoint1)

  setTimeout(() => checkpointsRotate(checkpoint2), 2500);
  setTimeout(() => checkpointsRotate(checkpoint3), 5000);
  setTimeout(() => checkpointsRotate(checkpoint4), 7500);
  setTimeout(() => {
    quizScreen9.style.display = 'none'
    quizScreen10.style.display = 'flex'

  }, 15000);

}

quiz8ButtonPrev.addEventListener('click', () => {
  quizScreen7.style.display = 'flex'
  quizScreen8.style.display = 'none'
})

quiz8ButtonNext.addEventListener('click', () => {
  let flag = false
  quiz8Inputs.forEach(input => {
    if (!input.value) {
      input.style.border = '1px solid red'
      setTimeout(() => {
        input.style.border = '1px solid #585858'
      }, 1000)
      flag = true
    }
  })
  if (flag) {
    quiz8Header.style.color = 'red'
    setTimeout(() => {
      quiz8Header.style.color = '#585858'
    }, 1000);
  } else {
    quizScreen8.style.display = 'none'
    quizScreen9.style.display = 'flex'
    analysis()
  }
})