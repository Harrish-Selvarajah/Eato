var paymentDefault =
{
    "cardnum": "5555555555555555",
    "cardname": "N.Amjad",
    "cvc": "123",
    "expdt": "12/2021",
    "pc": "12345",
    "type": "master"
}

var paymentOpts = []

function loadPaymentData() {
    paymentData = JSON.parse(sessionStorage.getItem('paymentOpts'))
    paymentOpts = []

    if (paymentData != null && paymentData != undefined) {
        paymentOpts = paymentOpts.concat(paymentData)
    }
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
                            <h1>**** **** **** ${cardnum.substring(cardnum.length - 4, cardnum.length)}</h1>
                            <div>
                                <div>
                                    <h3>Expiry Date</h3>
                                    <h5>${payment.expdt}</h5>
                                </div>
                                <img src="../assets/${payment.type != null ? payment.type : "master"}.png" />
                            </div>
                        </div>
                    </div>
            `
        )
    });

    $cardItems.append(cards)
}

$(document).ready(function () {
    noteNavigation()

    loadPaymentData()

    if (paymentOpts.length != 0){
        loadPaymentOptions()
    } else{
        showNoPaymentOptionScreen()
    }

    $('#add-payment').click(function (e) {

        if (!detectMobileWithAgent()) {
            $('#add-payment-pop').popup('open')
        } else {
            document.location.href = '../components/add-payment.html'
        }
    });

    $('#close').click(function () {
        $('#add-payment-pop').popup("close")
        loadPaymentData()
        loadPaymentOptions()

    })

    $('#i #btn-footer #btn-confirm').click(function () {
        $('#add-payment-pop').popup("close")
    })
    
    $('#close-with-success').click(function(){
        toastr.success('Successfully Added To the Wallet', 'Success');
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
    return ((window.innerWidth <= 400) && (window.innerHeight <= 800));
}

function navigatePaymentMethod(){
    var backPage = sessionStorage.getItem('back-from-payment-method')
    console.log(backPage)
    if (backPage != null && backPage != ''){
        document.location.href = `../components/${backPage}`
    }else{
        document.location.href = '../components/profile.html'
    }
}

function noteNavigation(){
    
    var lastScreen = ''
    var previousURL = document.referrer
    if (previousURL.includes('order-confirmation.html')){
        lastScreen = 'order-confirmation.html'
    }

    if (previousURL.includes('profile.html')){
        lastScreen = 'profile.html'
    }
    
    if(lastScreen != ''){
        sessionStorage.setItem('back-from-payment-method', lastScreen);
    }
}

function showNoPaymentOptionScreen(){
    $cardItems = $('#card-items')
    
    card = `
         <div style ="display:flex; flex-direction:column; justify-content:center; position:relative; top:210px;">
             <span class="iconify" data-icon="mdi:wallet-plus" data-inline="false" style="color: #FD6921; font-size:100px; width:100%"></span>
         <div>
                <h4 style="width:100%; text-align:center;">No Payment Maethod </h4>
                <h5 style="width:100%; text-align:center;" >Click + to add Payment Method </h5>
         </div>
            
         </div>
    `
    $cardItems.append(card)


}

