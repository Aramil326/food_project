document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector('.payment_popup_form_close'),
    paymentPopupForm = document.querySelector('.payment_popup_form'),
    paymentPopup = document.querySelector('.payment_popup'),
    paymentRight = document.querySelector('.payment_right')

  closeButton.addEventListener('click', () => {
    paymentPopup.style.display = 'none';
    paymentRight.scrollIntoView()
  })

  // Меняем ихображение закрытия
  if (window.innerWidth <= 480) {
    closeButton.remove()
    closeButton.src = '/img/close_orange.png'
    paymentPopupForm.prepend(closeButton)
  }

  // Настройка plaseholder'a инпута почты
  const paymentInput = document.querySelector('.payment_right_input-contain input'),
    paymentRightText = document.querySelector('.payment_right_text')

  paymentInput.addEventListener('focus', () => {
    paymentRightText.style.display = 'block'
  })

  paymentInput.addEventListener('blur', () => {
    if (paymentInput.value) {
      paymentRightText.style.display = 'none'
    }
  })

  // Возврат к секции, откуда перешел пользователь
  const backTo = document.querySelector('a')
  if (document.location.hash === '#plan') {
    backTo.href = backTo.href.slice(0, backTo.href.length - 7) + '#plan'
  }

  // Валидация
  const paymentEmail = document.querySelector('.payment_right_input-contain input'),
    paymentAgree = document.querySelector('.payment_right_agree'),
    EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    paymentButton = document.querySelector('.payment_right_button'),
    paymentAgreeCheckbox = document.querySelector('input[type="checkbox"]'),
    paymentPopupFormInput = document.querySelector('.payment_popup_form_card-number_input[placeholder="ivanov_ivan@mail.ru"]')

  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value)
  }

  paymentEmail.addEventListener('change', (e) => {
    if (isEmailValid(e.target.value)) {
      paymentEmail.style.border = '3px solid green'
    } else {
      paymentEmail.style.border = '3px solid red'
      setTimeout(() => {
        paymentEmail.style.border = '3px solid #585858'
        e.target.value = ''
      }, 1000)
    }
  })

  paymentButton.addEventListener('click', () => {
    if (!paymentEmail.value && !paymentAgreeCheckbox.checked) {
      paymentEmail.style.border = '3px solid red'
      setTimeout(() => {
        paymentEmail.style.border = '3px solid #585858'
        paymentEmail.value = ''
      }, 1000)

      paymentAgree.style.outline = '1px solid red'
      setTimeout(() => {
        paymentAgree.style.outline = ''
      }, 1000)
    } else if (!paymentEmail.value) {
      paymentEmail.style.border = '3px solid red'
      setTimeout(() => {
        paymentEmail.style.border = '3px solid #585858'
        e.target.value = ''
      }, 1000)
    } else if (!paymentAgreeCheckbox.checked) {
      paymentAgree.style.outline = '1px solid red'
      setTimeout(() => {
        paymentAgree.style.outline = ''
      }, 1000)
    } else {
      paymentPopup.style.display = 'flex';
      paymentPopup.scrollIntoView()
      paymentPopupFormInput.value = paymentEmail.value
      console.log(paymentPopupFormInput)
    }
  })


})