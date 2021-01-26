var stripe = Stripe('pk_test_51I6yl2F5uJFec6fvNwc1l8AB9ca4GtV0dI9uojppdObsBc9GquBNjg6M6su4FvpCEyMnRL7HmjTIeEWtMB6p6vhF00CguWcTF9');
var sk_token = "sk_test_2DofWWLxr3TiIlSzzCZotVHj00mjwcntuw";
var elements = stripe.elements();
var paymentOpts = []
var amount = 1500;
var sr_name = "Amjad"
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    color: '#32325d',
  },
};
var totalPrice = 0;
var checked = false;

// $(document).ready(function () {

//  })

var paymentDefault =
{
  "cardnum": "5454 5454 5454 5454",
  "cardname": "N.Amjad",
  "cvc": "123",
  "expdt": "12/2025",
  "pc": "12345",
  "type": "master"
}

var selectPaymentMethod = {}

function createCardTokenAndMakePayment() {

  var cardnum = selectPaymentMethod.cardnum
  var nameInDesc = selectPaymentMethod.cardname != null ? selectPaymentMethod.cardname : "Eato"
  var expdt = selectPaymentMethod.expdt
  var cvc = selectPaymentMethod.cvc
  var pc = selectPaymentMethod.pc

  var yyyy = expdt.split('/')[1]
  var mm = expdt.split('/')[0].replace(/0(\d+)/, "")
  cardnum = cardnum.replaceAll(" ", "")
  var settings = {
    "url": "https://api.stripe.com/v1/tokens",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": `bearer ${sk_token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "card[number]": `${cardnum}`,
      "card[exp_month]": `${mm}`,
      "card[exp_year]": `${yyyy}`,
      "card[cvc]": `${cvc}`
    }
  };

  console.log(settings)
  console.log("MAKING SERVER REQEST FOR TOKEN")
  $.ajax(settings).done(function (response) {
    console.log(response);
    makePayment(response, nameInDesc)
  }).fail(function (data) {
    toastr["error"]("Please Attempt With Another Payment Method", "Payment Failed")
  })



}

function validateFields() {

  var cardnum = selectPaymentMethod.cardnum
  var nameInDesc = selectPaymentMethod.cardname != null ? selectPaymentMethod.cardname : "Eato"
  var expdt = selectPaymentMethod.expdt
  var cvc = selectPaymentMethod.cvc
  var pc = selectPaymentMethod.pc
  var cardname = selectPaymentMethod.cardname
  var res = true;
  var message = ""
  cardnum = cardnum.replaceAll(" ", "")

  console.log(cardnum, cardname, expdt, cvc, pc)

  if (isEmpty(cardnum)) {
    message = "Card Number is a mandatory field"
    res = false
  }

  else if (isEmpty(expdt)) {
    message = "Expiry Date is a mandatory field"
    res = false
  }

  else if (isEmpty(cvc)) {
    message = "CVC is a mandatory field"
    res = false
  }

  if (message == "" && (cardnum.length > 19 && cardnum.length < 8)) {
    message = "Card Number is between 8 and 19";
    res = false
  } else if (message == "" && !cvc.length == 3) {
    message = "Invalid cvc format";
    res = false
  } else if (message == "" && !pc.length == 5) {
    message = "Invalid Postal Code Format"
    res = false
  }

  if (message == "" && /^\d*$/.test(cardnum) == false) {
    message = "Invalid Card Number Pattern";
    res = false
  } else if (message == "" && /^\d*$/.test(cvc) == false) {
    message = "Invalid CVC";
    res = false
  } else if (message == "" && /^\d*$/.test(pc) == false) {
    message = "Invalid Postal Code Number";
    res = false
  }

  if (message == "" && /^\d{2}\/\d{4}$/.test(expdt) == false) {
    message = "Expiry Date Formart should numeric and in MM/YYYY format";
    res = false
  } else if (message == "" && (new Date().getFullYear() > expdt.split("/")[1])) {
    message = "Expired Cards cannot be used"
    res = false
  } else if (message == "" && (new Date().getFullYear() == expdt.split("/")[1])) {
    if (new Date().getMonth() + 1 > expdt.split("/")[0]) {
      message = "Expired Cards cannot be used"
      res = false
    }
  }


  if (message != "") {
    $('#all-error-msg').empty();
    $('#all-error-msg').append(message);
  }
  return res
}

function startCardPayment() {

  // clear error message if it exist
  $('#all-error-msg').empty();
  if (validateFields()) {
    createCardTokenAndMakePayment();
  } else {
    console.error("In valid Inputs")
  }

}

function makePayment(token, name) {
  var price = totalPrice * 100
  var settings = {
    "url": "https://api.stripe.com/v1/charges",
    "method": "POST",
    "headers": {
      "Authorization": `Bearer ${sk_token}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "amount": price,
      "currency": "lkr",
      "description": `Eato Food Purchase by ${name}`,
      "source": token.id
    }
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    document.location.href = '../components/order-status.html'
  }).fail(function (data) {
    toastr["error"]("Eroor Occurred in Payment", "Error!")
  })
}


$(document).ready(function () {
  console.log(sessionStorage, 'session');
  totalPrice = JSON.parse(sessionStorage.getItem('totalPrice'));
  loyaltyPoints = JSON.parse(sessionStorage.getItem('loyaltyPoints'));
  var location = sessionStorage.getItem('location');
  x = Number(totalPrice)
  $('#sub-price-tag').text('Rs ' + x);
  $('#discount-tag').text('Rs 0');
  $('#price-tag').text('Rs ' + x);

  if (location == null || location == undefined){
     location = 'Not Selected'
  }
  $('#location').text(location)


  loadPaymentData();
  populateData();

  $('#btn-confirm-order').click(function (e) {
    calculateLoyaltyPoints();
    console.log(selectPaymentMethod)
    if (Object.keys(selectPaymentMethod).length == 0) {
        toastr["warning"]("Payment Type Not Selected", "Warning!")
    } else {
      if (selectPaymentMethod.type == 'cash') {
        document.location.href = '../components/order-status.html'
      } else {
        startCardPayment();
      }
    }

  });

  $("#add-loyalty").click(function () {
    if (loyaltyPoints !== 0) {
      if ($('#add-loyalty').is(":checked")) {
        checked = true;
        discount = loyaltyPoints * 0.1;
        discount =  Math.round(discount * 100) / 100
        totalPrice = totalPrice - discount;
        totalPrice =  Math.round(totalPrice * 100) / 100
        $('#discount-tag').text('Rs' + ' ' + discount);
        $('#price-tag').text('Rs' + ' ' + totalPrice);
      } else {
        checked = false;
        discount = loyaltyPoints * 0.1;
        discount =  Math.round(discount * 100) / 100
        totalPrice = totalPrice + discount;
        totalPrice =  Math.round(totalPrice * 100) / 100
        $('#discount-tag').text('Rs' + ' ' + 0);
        $('#price-tag').text('Rs' + ' ' + totalPrice);
      }
    } else {
      if (loyaltyPoints === 0) {
        if ($('#add-loyalty').is(":checked")) {
          checked = true;
          discount = 0;
          totalPrice = totalPrice - discount;
          totalPrice =  Math.round(totalPrice * 100) / 100
          $('#discount-tag').text('Rs' +  ' ' + discount);
          $('#price-tag').text('Rs' + ' ' + totalPrice);
        } else {
          checked = false;
          discount = 0;
          totalPrice = totalPrice + discount;
          totalPrice =  Math.round(totalPrice * 100) / 100
          $('#discount-tag').text('Rs' +  ' ' + 0);
          $('#price-tag').text('Rs' + ' ' + totalPrice);
        }
      }
    }
   


  });
});


function loadPaymentData() {
  paymentData = JSON.parse(sessionStorage.getItem('paymentOpts'))
  paymentOpts = []
  //paymentOpts.push(paymentDefault)

  if (paymentData != null && paymentData != undefined) {
    paymentOpts = paymentOpts.concat(paymentData)
  }

  console.log(paymentOpts)
}


function populateData() {
  $items = $('#items')
  // $item = $('#item')
  //$items.empty()
  itemContent = ""
  paymentOpts.forEach(function (payment, idx) {
    var cardnum = payment.cardnum;
    itemContent = itemContent.concat(
      `<div class="item" id="card-${idx}" onclick="selectPaymentMethodNow(${idx})" >
            <img src="../assets/${payment.type != null ? payment.type : "master"}.png" />
            <div>
                <p class="primaryText"> **** ${cardnum.substring(cardnum.length - 4, cardnum.length)}</p>
                <p class="primaryText">${payment.expdt}</p>
            </div>
        </div>`
    )

  });

  itemContent = itemContent.concat(
    `<div class="item" id="add-payment-card" onclick=" navigateToAddPayment()" >
          <span class="iconify" data-icon="mdi:wallet" data-inline="false" style="color: #FD6921; font-size:50px;"></span>
            <div>
                <p class="primaryText">Mange Payment</p>
                <p class="primaryText">Options</p>
            </div>
        </div>`
  )
  
  $items.append(itemContent)
}

function isEmpty(str) {
  return str == null || str == undefined || str == "" || str.length == 0
}

function calculateLoyaltyPoints() {
  // 10 loyalty points == Rs 1
  var loyaltyPointsArray = [];
  var dedLoyalty = 0;
  var totalLoyaltyPoints = 0;
  // sessionStorage.setItem('loyaltyPointsArray', JSON.stringify(loyaltyPointsArray));
  loyaltyPoints = JSON.parse(sessionStorage.getItem('loyaltyPoints'));
  loyaltyPointsArray = JSON.parse(sessionStorage.getItem('loyaltyPointsArray'));
  x = 0.1 * totalPrice;
  if (checked === true) {
    dedLoyalty = loyaltyPoints - loyaltyPoints;
    totalLoyaltyPoints = dedLoyalty + x;
  } else {
    totalLoyaltyPoints = loyaltyPoints + x;
  }
  var vendorId = JSON.parse(sessionStorage.getItem('vendorID'));
  var vendorName = "";
  if (vendorId === 1) {
    vendorName = 'Melt House';
  } else {
    if (vendorId === 2) {
      vendorName = 'Suburban Kithcen'
    }
  };
  
  loyaltyPointsArray.push({points: x, via: vendorName, method: 'purchase', price: totalPrice});
  sessionStorage.setItem('loyaltyPoints', JSON.stringify(totalLoyaltyPoints));
  sessionStorage.setItem('loyaltyPointsArray', JSON.stringify(loyaltyPointsArray));
  sessionStorage.setItem('vendorID', vendorId);
}

function selectPaymentMethodNow(idx) {
  if (idx == -1) {

    $(`#cash`).addClass('active-selected')

    selectPaymentMethod = {
      type: "cash"
    }

  } else {
    $(`#cash`).removeClass('active-selected')
    //card
    selectPaymentMethod = paymentOpts[idx]
  }

  console.log(selectPaymentMethod)

  for (i = 0; i < paymentOpts.length; i++) {
    if (i == idx) {
      $(`#card-${i}`).addClass('active-selected')
    } else {
      $(`#card-${i}`).removeClass('active-selected')
    }
  }
}


function navigateToAddPayment(){
  document.location.href = "../components/payment-method.html"
}
