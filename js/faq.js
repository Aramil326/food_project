const faqItems = document.querySelectorAll('.faq_acordeon-box_item')

faqItems.forEach(faqItem => {
  faqItem.addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      if (e.target.children[1].style.display === 'block') {
        e.target.children[1].style.display = 'none'
      } else {
        e.target.children[1].style.display = 'block'
      }
    } else {

      if (e.target.parentNode.children[1].style.display === 'block') {
        e.target.parentNode.children[1].style.display = 'none'
      } else {
        e.target.parentNode.children[1].style.display = 'block'
      }
    }
  })
})