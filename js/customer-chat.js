
var chats = [];
var vendorName = "";

$(document).ready(function() {
    // sessionStorage.setItem('chats', JSON.stringify(chats));
    console.log(sessionStorage);
    chats = JSON.parse(sessionStorage.getItem('chats'));
    console.log(chats);
    var vendorID = JSON.parse(sessionStorage.getItem('vendorID'));
   
    switch(vendorID) {
        case 1:
            vendorName = 'Melt House';
            break;
        case 2:
            vendorName = 'Suburban Kitchen';
            break;
    }
    $('#vendor-name').text(vendorName);
    if (chats.length !== 0) {
        renderMessagesCust();
    }
   
});

function renderMessagesCust() {
    var renderHtml = "";
    var renderHtml2 = "";
    var userObj = JSON.parse(sessionStorage.getItem('userobj'));
    fchats = chats.filter(function (item) {return item.vendorName === vendorName});
    ffchats = fchats.filter(function (item) {return item.cusotmerName == userObj.name});
    $('#render-message-vend').empty();
    ffchats.forEach(function(chat) {
        if (chat.type == 'v') {
           renderHtml += `<div id="render-message-vend">
           <div class="recieved-message" >
           <span class="primaryText">${chat.message}</span>
       </div>
       </div>
        `
        } else {
            renderHtml += `
        <div id="render-message-cust">
            <div class="sent-message">
                <div>
                    <span class="primaryText">${chat.message}</span>
                </div>
            </div>
        </div>`
        }
    })
    $('#render-message-vend').append(renderHtml);
    // $('#render-message-cust').append(renderHtml2);
}

function sendMessageCustomer() {
    var userObj = JSON.parse(sessionStorage.getItem('userobj'));
    var vendorId = sessionStorage.getItem('vendorID');
    var message = $('#message').val();
    // var vendorName = "";
    // if (vendorId == 1) {
    //     vendorName = 'Melt House';
    // }
    chat = {
        orderID: 1,
        cusotmerName: userObj.name,
        vendorName: vendorName,
        time: '',
        message: message,
        type: 'c'
    }
    chats.push(chat);
    sessionStorage.setItem('chats', JSON.stringify(chats));
    renderMessagesCust();
}

// function sendMessageVendor() {
//     var vendorId = sessionStorage.getItem('vendorID');
//     var message = $('#message').val();
//     var vendorName = "";
//     chat = {
//         orderID: 1,
//         cusotmerName: 'Kamala Harris',
//         vendorName: 'Melt House',
//         time: '',
//         message: message,
//         type: 'v'
//     }
//     chats.push(chat);
//     sessionStorage.setItem('chats', JSON.stringify(chats));
//     renderMessages();
// }

