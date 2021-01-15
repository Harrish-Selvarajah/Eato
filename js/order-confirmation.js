var stripe = Stripe('pk_test_51I6yl2F5uJFec6fvNwc1l8AB9ca4GtV0dI9uojppdObsBc9GquBNjg6M6su4FvpCEyMnRL7HmjTIeEWtMB6p6vhF00CguWcTF9');
var sk_token = "sk_test_51I6yl2F5uJFec6fvprw6NwQw8vxkAhw4S8Mrxy00RDgd3aYrKrcarpgBfz5uORnc9rOz8hmFOELy3CbTJYCmb0OA002i46dFYi";
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

// $(document).ready(function () {

//  })


function createCardTokenAndMakePayment(){
    
    var form = $('#payment-form')
    var cardnum = form.find('input[name="cardnum"]').val();
    var cardname = form.find('input[name="cardname"]').val();
    var expdt = form.find('input[name="expdt"]').val();
    var cvc = form.find('input[name="cvc"]').val();
    var pc = form.find('input[name="pc"]').val();
    var nameInDesc = cardname != "" ? cardname : sr_name;
   

    var yyyy = expdt.split('/')[1]
    var mm = expdt.split('/')[0].replace(/0(\d+)/,"")
    cardnum = cardnum.replaceAll(" ","")
    var settings = {
        "url": "https://api.stripe.com/v1/tokens",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": `Bearer ${sk_token}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "card[number]": `${cardnum}`,
          "card[exp_month]": `${mm}`,
          "card[exp_year]": `${yyyy}`,
          "card[cvc]": `${cvc}`
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        makePayment(response, nameInDesc)
      });

   

}

function validateFields(){
  
    var form = $('#payment-form')
    var message = "";
    var cardnum = form.find('input[name="cardnum"]').val();
    var cardname = form.find('input[name="cardname"]').val();
    var expdt = form.find('input[name="expdt"]').val();
    var cvc = form.find('input[name="cvc"]').val();
    var pc = form.find('input[name="pc"]').val();
    var res = true;
    cardnum = cardnum.replaceAll(" ","")

    console.log(cardnum,cardname,expdt,cvc,pc)
    
    if(isEmpty(cardnum)){
        message = "Card Number is a mandatory field"
        res = false
    }

    else if(isEmpty(expdt)){
        message = "Expiry Date is a mandatory field"
        res = false
    }

    else if(isEmpty(cvc)){
        message = "CVC is a mandatory field"
        res = false
    }

    if (message == "" && (cardnum.length > 19 &&  cardnum.length < 8) ){
        message = "Card Number is between 8 and 19";
        res = false
    } else if (message == "" && !cvc.length == 3){
            message = "Invalid cvc format";
            res = false
    }else if (message == "" && !pc.length == 5){
            message = "Invalid Postal Code Format"
            res = false
    }
    
    if (message == "" && /^\d*$/.test(cardnum) == false ){
        message = "Invalid Card Number Pattern";
        res = false
    }else if(message == "" && /^\d*$/.test(cvc) == false ){
        message = "Invalid CVC";
        res = false
    }else if(message == "" && /^\d*$/.test(pc) == false ){
        message = "Invalid Postal Code Number";
        res = false
    }

    if (message == "" && /^\d{2}\/\d{4}$/.test(expdt) == false){
        message = "Expiry Date Formart should numeric and in MM/YYYY format";
        res = false
    }else if (message == "" && (new Date().getFullYear() > expdt.split("/")[1])){
        message = "Expired Cards cannot be used"
        res = false
    }else if (message == "" && (new Date().getFullYear() == expdt.split("/")[1])){
        if(new Date().getMonth() + 1 > expdt.split("/")[0]){
          message = "Expired Cards cannot be used"
          res = false
        }
    }


    if(message !=""){
       $('#all-error-msg').empty();
       $('#all-error-msg').append(message);
    }
    return res
}

 function startPayment(){
 
// clear error message if it exist
 $('#all-error-msg').empty();
  if (validateFields()){
    createCardTokenAndMakePayment();
  } else{
    console.error("In valid Inputs")
  }

 }

 function  makePayment(token, name){

    var settings = {
        "url": "https://api.stripe.com/v1/charges",
        "method": "POST",
        "headers": {
          "Authorization": `Bearer ${sk_token}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
          "amount": amount,
          "currency": "usd",
          "description": `Eato Food Purchase by ${name}`,
          "source": token.id
        }
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      
      });
 }


 $(document).ready(function(){
  totalPrice = JSON.parse(sessionStorage.getItem('totalPrice'));
  calculateLoyaltyPoints();
    $('#btn-confirm-order').click(function (e) { 
       startPayment(); 
    });

    
 });


 function loadPaymentData(){
  paymentData = JSON.parse(sessionStorage.getItem('paymentOpts'))
  paymentOpts = [] 
  paymentOpts.push(paymentDefault)

  paymentOpts = paymentOpts.concat(paymentData)

  console.log(paymentOpts)
}


function populateData(){
  
}

 function isEmpty(str){
     return str == null || str == undefined || str == "" || str.length == 0
 }

 function calculateLoyaltyPoints() {
   debugger;
  // 10 loyalty points == Rs 1
  x = 10 * totalPrice;
  loyaltyPoints = JSON.parse(sessionStorage.getItem('loyaltyPoints'));
  totalLoyaltyPoints = loyaltyPoints + x;
  sessionStorage.setItem('loyaltyPoints', loyaltyPoints);
}
