function navigation(page) {
    // debugger;
    switch(page) {
        case 'home':
            document.location.href = "./home.html";
            break;
        case 'search':
            document.location.href = "./search.html";
            break;   
        case 'cart':
            document.location.href = "./cart.html";
            break;
        case 'order':
            document.location.href = './orders.html';
            break;
        case 'profile':
            document.location.href = "./profile.html";
            break;
        case 'payment-method':
            document.location.href = "./payment-method.html";
            break;
        case 'favourites':
            document.location.href = "./favourites.html";
            break;
        case 'loyaltyPoints':
            document.location.href = "./";
            break;
        case 'qr-cam':
            document.location.href = "./QR-scanner.html";
            break;
        case 'feedback':
            document.location.href = "./feedback.html";
            break;
        case 'logout':
            document.location.href = "./login.html";
            break;
        case 'location':
            document.location.href = "./location.html"
            break;
    }
   
}

function goBack() {
    window.history.back();
}