var paymentDefault = 
    {
        "cardnum" : "5555555555555555",
        "cardname" : "N.Amjad",
        "cvc": "123",
        "expdt" : "12/2021",
        "pc": "12345"
    }

var paymentOpts = []

function loadPaymentData(){
    paymentData = JSON.parse(sessionStorage.getItem('paymentOpts'))
    paymentOpts = [] 
    paymentOpts.push(paymentDefault)

    paymentOpts = paymentOpts.concat(paymentData)

    console.log(paymentOpts)
}

function loadPaymentOptions() {
    
    $cardItems = $('#card-items')
    $cardItems.empty()
    var cards = ""

    paymentOpts.forEach((payment, idx) => {
        var cardnum = payment.cardnum;
        cards = cards.concat(
            `
            <div class="card-item">
                        <div>
                            <h1>**** **** **** ${cardnum.substring(cardnum.length-4,cardnum.length)}</h1>
                            <div>
                                <div>
                                    <h3>Expiry Date</h3>
                                    <h5>09/22</h5>
                                </div>
                                <img src="../assets/visa.png" />
                            </div>
                        </div>
                    </div>
            `
        )
    });

    $cardItems.append(cards)
} 

$(document).ready(function () {

   loadPaymentData()
   loadPaymentOptions()

   $('#add-payment').click(function (e) { 

      if(!detectMobileWithAgent()){
       $('#add-payment-pop').popup('open')
      }else{
         document.location.href = '../components/add-payment.html'
      }
   });

   $('#close').click(function(){
    $('#add-payment-pop').popup("close")
    loadPaymentData()
   loadPaymentOptions()

   })

   $('#i #btn-footer #btn-confirm').click(function(){
       console.log('sniff')
    $('#add-payment-pop').popup("close")
   })

})



function detectMobileWithAgent() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem) 
    });

}

function detectMobileWithScreen() {
    return ( ( window.innerWidth <= 400 ) && ( window.innerHeight <= 800 ) );
  }


