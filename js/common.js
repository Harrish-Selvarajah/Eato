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
            document.location.href = "./loyalty-points.html";
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
            document.location.href = "./location.html";
            break;
        case 'customer-login':
            document.location.href = "./login.html";
            break;
        case 'vendor-login':
            document.location.href = "./login-vendor.html";
            break;
        case 'cust-signup':
            document.location.href = "./signup.html";
            break;
        case 'vend-signup':
            document.location.href = "./signup-vendor.html";
            break;
        case 'about-us':
            document.location.href = "./about-us.html";
            break;
        case 'vendor-home':
            document.location.href = "./vendor-home.html";
            break;
        case 'vendor-menu':
            document.location.href = "./vendor-menu.html";
            break;
        case 'chat-vendor':
            if(!detectMobileWithAgent()) {
                document.location.href = "./chat-vendor.html";
            } else {
                document.location.href = "./chats-vendor.html";
            }      
            break;
        case 'vendor-review':
            document.location.href = './vendor-review.html';
            break;
        case 'customer-chat':
            document.location.href = './chat-customer.html';
            break;
        case 'order-status':
            document.location.href = './order-status.html';
            break;
        case 'user-selection':
            document.location.href = './user-selection.html';
            break;
    }
   
}

function goBack() {
    window.history.back();
}


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