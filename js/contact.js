const contactHeader = document.querySelector('.contact h1'),
  contactEmail = document.querySelector('input[type="e-mail"]'),
  contactTheme = document.querySelector('input[type="text"]'),
  contactMessage = document.querySelector('textarea[type="text"]'),
  contactFormCheckbox = document.querySelector('.contact_form_checkbox')
contactAgree = document.querySelector('input[type="checkbox"]'),
  contactButton = document.querySelector('.contact_form_button'),
  EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
  contactInputs = [contactEmail, contactTheme, contactMessage],
  contactForm = document.querySelector('.contact_form form')

let flag = false

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value)
}

contactEmail.addEventListener('change', (e) => {
  if (isEmailValid(e.target.value)) {
    e.target.style.outline = '1px solid green'
    flag = true
  } else {
    e.target.style.outline = '1px solid red'
    setTimeout(() => {
      e.target.style.outline = ''
      e.target.value = ''
    }, 1000)
  }
})

contactTheme.addEventListener('change', (e) => {
  if (e.target.value) {
    e.target.style.outline = '1px solid green'
  } else {
    e.target.style.outline = '1px solid red'
    setTimeout(() => {
      e.target.style.outline = ''
    }, 1000)
  }
})

contactMessage.addEventListener('change', (e) => {
  if (e.target.value) {
    e.target.style.outline = '1px solid green'
  } else {
    e.target.style.outline = '1px solid red'
    setTimeout(() => {
      e.target.style.outline = ''
    }, 1000)
  }
})

contactButton.addEventListener('click', (e) => {
  let flag = false
  contactInputs.forEach(input => {
    if (!input.value) {
      input.style.outline = '1px solid red'
      setTimeout(() => {
        input.style.outline = '1px solid #585858'
      }, 1000)
      flag = true
    } else {
      flag = false
    }
  })


  if (contactAgree.checked && !flag) {
    console.log('отправлено')
  } else if (!contactAgree.checked) {
    contactFormCheckbox.style.outline = '1px solid red'
    setTimeout(() => {
      contactFormCheckbox.style.outline = ''
    }, 1000)
  }
})