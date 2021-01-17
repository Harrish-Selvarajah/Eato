var stripe = Stripe('pk_test_51I6yl2F5uJFec6fvNwc1l8AB9ca4GtV0dI9uojppdObsBc9GquBNjg6M6su4FvpCEyMnRL7HmjTIeEWtMB6p6vhF00CguWcTF9');
var sk_token = "sk_test_2DofWWLxr3TiIlSzzCZotVHj00mjwcntuw";

$(document).ready(function () {


    var popup = getUrlParameter('popup')
    console.log(popup)
    if (popup == true || popup == "true") {
        console.log("yooo")
        $('#header-bar').hide();
        $('#footerr').hide();

        $('.ui-content').css('margin-top', '0px')
        $('#btn-footer').css('position', "relative")
        $('#btn-footer').css('bottom', "100px")

        $('.footer-addP').css('position', 'absolute')
        $('.footer-addP').css('bottom', '40px')
        $('.footer-addP').css('left', '50%')
        $('.footer-addP').css('transform', 'translate(-50%)')
    }


    $('#btn-confirm').click(function (e) {
        if (validateFields()) {
            createCardTokenAndMakePayment()    
        }
    });

})


function navigateToNext(){
    var popup = getUrlParameter('popup')
    if (popup == false || popup == undefined) { 
        toastr.success('Successfully Added To the Wallet', 'Success'); 
        setTimeout(function(){
            document.location.href = '../components/payment-method.html'
        },1000)           
       
    } else {
        parent.document.getElementById("close-with-success").click()
        parent.document.getElementById("close").click()
    }
}


function validateFields() {

    var message = "";
    var cardnum = $('#cardnum').val()
    var cardname = $('#cardname').val()
    var expdt = $('#expdt').val()
    var cvc = $('#cvc').val()
    var pc = $('#pc').val()
    var res = true;
    console.log(cardnum, cardname, expdt, cvc, pc)
    cardnum = cardnum.replaceAll(" ", "")

   

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

function addPaymentToWallet() {

    var message = "";
    var cardnum = $('#cardnum').val()
    var cardname = $('#cardname').val()
    var expdt = $('#expdt').val()
    var cvc = $('#cvc').val()
    var pc = $('#pc').val()
    var res = true;
    console.log(cardnum, cardname, expdt, cvc, pc)
    cardnum = cardnum.replaceAll(" ", "")

    var paymentOptions = JSON.parse(sessionStorage.getItem('paymentOpts'));

    if (paymentOptions == undefined) {
        paymentOptions = []
    }

    var type = null
    if (cardnum.substring(0, 1) == "5") {
        type = "master"
    } else if (cardnum.substring(0, 1) == "4") {
        type = "visa"
    } else if (cardnum.substring(0, 1) == "3") {
        type = "amex"
    }

    paymentOptions.push({
        cardname: cardname,
        cardnum: cardnum,
        expdt: expdt,
        cvc: cvc,
        pc: pc,
        type: type
    })

    sessionStorage.setItem('paymentOpts', JSON.stringify(paymentOptions));

    navigateToNext();
   
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function isEmpty(str){
    return str == null || str == undefined || str == "" || str.length == 0
}


function createCardTokenAndMakePayment() {
    var message = "";
    var cardnum = $('#cardnum').val()
    var cardname = $('#cardname').val()
    var expdt = $('#expdt').val()
    var cvc = $('#cvc').val()
    var pc = $('#pc').val()
    var res = true;
    console.log(cardnum, cardname, expdt, cvc, pc)
    cardnum = cardnum.replaceAll(" ", "")

    var nameInDesc = cardname != null ? cardname : "Eato"

  
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
      addPaymentToWallet();
    }).fail(function (data) {
        toastr["error"]("Card Not Valid: Please Re-Check The Card Info", "Payment Failed")
    })
  
  
  
  }

