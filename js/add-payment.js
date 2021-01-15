

$(document).ready(function () {
  

    var popup = getUrlParameter('popup')
    console.log(popup)
    if(popup == true || popup == "true"){
        console.log("yooo")
        $('#header-bar').hide();
        $('#footerr').hide();
       
        $('.ui-content').css('margin-top','0px')
        $('#btn-footer').css('position',"relative")
        $('#btn-footer').css('bottom',"100px")
    }


    $('#btn-confirm').click(function (e) { 
            if(validateFields()){
               addPaymentToWallet()

               if(popup == false){
               document.location.href = '../components/payment-method.html'
               }else{
                 parent.document.getElementById("close").click()
               }
            }else{
                console.log("ERROR")
            }
    });

})


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

function addPaymentToWallet(){
    
    var form = $('#payment-form')
    var message = "";
    var cardnum = form.find('input[name="cardnum"]').val();
    var cardname = form.find('input[name="cardname"]').val();
    var expdt = form.find('input[name="expdt"]').val();
    var cvc = form.find('input[name="cvc"]').val();
    var pc = form.find('input[name="pc"]').val();
    cardnum = cardnum.replaceAll(" ","")
    
    var paymentOptions =  JSON.parse(sessionStorage.getItem('paymentOpts'));
    
    if (paymentOptions == undefined){
        paymentOptions = []
    }
    
    var type = null
    if(cardnum.substring(0,1) == "5"){
        type = "master"
    }else if(cardnum.substring(0,1) == "4"){
        type = "visa"
    }else if(cardnum.substring(0,1) == "4"){
        type = "amex"
    }

    paymentOptions.push({
        cardname : cardname,
        cardnum : cardnum,
        expdt: expdt,
        cvc : cvc,
        pc : pc,
        type:type
    })

    sessionStorage.setItem('paymentOpts', JSON.stringify(paymentOptions));
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