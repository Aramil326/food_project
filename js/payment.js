document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector('.payment_popup_form_close'),
    paymentPopupForm = document.querySelector('.payment_popup_form')

  // Меняем изображение закрытия
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
    paymentAgree1 = document.querySelector('.payment_right_agree1'),
    paymentAgree2 = document.querySelector('.payment_right_agree2'),
    EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    paymentButton = document.querySelector('.payment_right_button'),
    paymentAgree1Checkbox = document.querySelector('.payment_right_agree1 input[type="checkbox"]'),
    paymentAgree2Checkbox = document.querySelector('.payment_right_agree2 input[type="checkbox"]')

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
      }, 10)
    }
  })

  paymentButton.addEventListener('click', () => {
    if (!paymentEmail.value && !paymentAgree1Checkbox.checked && !paymentAgree2Checkbox.checked) {
      paymentEmail.style.border = '3px solid red'
      setTimeout(() => {
        paymentEmail.style.border = '3px solid #585858'
        paymentEmail.value = ''
      }, 500)

      paymentAgree1.style.outline = '1px solid red'
      setTimeout(() => {
        paymentAgree1.style.outline = ''
      }, 500)
      paymentAgree2.style.outline = '1px solid red'
      setTimeout(() => {
        paymentAgree2.style.outline = ''
      }, 500)
    } else if (!paymentEmail.value) {
      paymentEmail.style.border = '3px solid red'
      setTimeout(() => {
        paymentEmail.style.border = '3px solid #585858'
        e.target.value = ''
      }, 500)
    } else if (!paymentAgree1Checkbox.checked) {
      paymentAgree1.style.outline = '1px solid red'
      setTimeout(() => {
        paymentAgree1.style.outline = ''
      }, 500)
    } else if (!paymentAgree2Checkbox.checked) {
      paymentAgree2.style.outline = '1px solid red'
      setTimeout(() => {
        paymentAgree2.style.outline = ''
      }, 500)
    } else {
      pay()
    }
  })

  this.pay = function () {
    var widget = new cp.CloudPayments();
    var receiptStart = {
      Items: [//товарные позиции
        {
          label: 'Индивидуальный план кето-диеты от KETO-DAY на первую неделю', //наименование товара
          price: 28.00, //цена
          quantity: 1.00, //количество
          amount: 28.00, //сумма
          vat: 20, //ставка НДС
          method: 0, // тег-1214 признак способа расчета - признак способа расчета
          object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
        }
      ],
      // taxationSystem: 0, //система налогообложения; необязательный, если у вас одна система налогообложения
      email: paymentEmail.value, //e-mail покупателя, если нужно отправить письмо с чеком
      isBso: false, //чек является бланком строгой отчетности
      amounts:
      {
        electronic: 28.00, // Сумма оплаты электронными деньгами
        advancePayment: 0.00, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
        credit: 0.00, // Сумма постоплатой(в кредит) (2 знака после запятой)
        provision: 0.00 // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
      }
    };
    var receiptRecurrent = {
      Items: [//товарные позиции
        {
          label: 'Индивидуальный план кето-диеты от KETO-DAY', //наименование товара
          price: 899.00, //цена
          quantity: 1.00, //количество
          amount: 899.00, //сумма
          vat: 20, //ставка НДС
          method: 0, // тег-1214 признак способа расчета - признак способа расчета
          object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
        }
      ],
      // taxationSystem: 0, //система налогообложения; необязательный, если у вас одна система налогообложения
      email: paymentEmail.value, //e-mail покупателя, если нужно отправить письмо с чеком
      isBso: false, //чек является бланком строгой отчетности
      amounts:
      {
        electronic: 899.00, // Сумма оплаты электронными деньгами
        advancePayment: 0.00, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
        credit: 0.00, // Сумма постоплатой(в кредит) (2 знака после запятой)
        provision: 0.00 // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
      }
    };

    var data = {};
    data.CloudPayments = {
      CustomerReceipt: receiptStart, //чек для первого платежа
      recurrent: {
        interval: 'Week',
        period: 1,
        MaxPeriods: 25,
        amount: 899.00,
        customerReceipt: receiptRecurrent //чек для регулярных платежей
      }
    }; //создание ежемесячной подписки

    widget.charge({ // options
      publicId: 'pk_355e92e25b49ffba13d15a86f9842', //id из личного кабинета
      description: 'Подписка на получение индивидуального плана кето-диеты от KETO-DAY', //назначение
      amount: 28.00, //сумма
      currency: 'RUB', //валюта
      skin: 'mini',
      accountId: paymentEmail.value, //идентификатор плательщика (обязательно для создания подписки)
      email: paymentEmail.value,
      data: data
    },
      function (options) { // success
        var now = new Date()
        let id = paymentEmail.value
        $.ajax({
          url: '../php/postData.php',
          type: 'POST',
          data: id,
          success: function (data) {
            console.log('Запрос ушел')
            console.dir(data)
          },
          error: function () {
            console.log('Запрос не ушел')
          }
        })
      },
      function (reason, options) { // fail
        //действие при неуспешной оплате
      });
  };
})