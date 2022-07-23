document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector('.payment_popup_form_close'),
    paymentPopupForm = document.querySelector('.payment_popup_form'),
    paymentPopup = document.querySelector('.payment_popup'),
    paymentRightButton = document.querySelector('.payment_right_button'),
    paymentRight = document.querySelector('.payment_right')

  closeButton.addEventListener('click', () => {
    paymentPopup.style.display = 'none';
    paymentRight.scrollIntoView()
  })

  paymentRightButton.addEventListener('click', () => {
    paymentPopup.style.display = 'flex';
    paymentPopup.scrollIntoView()
  })

  if (window.innerWidth <= 480) {
    closeButton.remove()
    closeButton.src = '/img/close_orange.png'
    paymentPopupForm.prepend(closeButton)
  }

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

  const backTo = document.querySelector('a')
  console.log(backTo.href)
  if (document.location.hash === '#plan') {
    backTo.href = backTo.href.slice(0, backTo.href.length - 7) + '#plan'
    console.log(backTo)
    console.log(backTo.href)
  }
})