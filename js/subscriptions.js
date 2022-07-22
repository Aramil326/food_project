const subscriptionsCardBoxItems = document.querySelectorAll('.subscriptions_card-box_item')

console.log(subscriptionsCardBoxItems[3].childNodes[1].style.width)

subscriptionsCardBoxItems[3].childNodes[1].style.width = '67%'

subscriptionsCardBoxItems[3].childNodes[3].style.display = 'block'
subscriptionsCardBoxItems[3].childNodes[3].style.width = '25%'
subscriptionsCardBoxItems[3].childNodes[3].style.filter = 'none'
