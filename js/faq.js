const faqItems = document.querySelectorAll('.faq_acordeon-box_item')

faqItems.forEach(faqItem => {
  faqItem.addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      if (e.target.children[1].style.maxHeight) {
        e.target.children[1].style.maxHeight = ''
      } else {
        e.target.children[1].style.maxHeight = '500px'
      }
    } else {
      if (e.target.parentNode.children[1].style.maxHeight) {
        e.target.parentNode.children[1].style.maxHeight = ''
      } else {
        e.target.parentNode.children[1].style.maxHeight = '500px'
      }
    }
  })
})