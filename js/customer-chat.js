// var chats = [
//         {
//             orderID: 1,
//             cusotmerName: 'Kamala Harris',
//             vendorName: 'Melt House',
//             time: '',
//             message: 'Dear Customer? Do you have any concerns with your order?',
//             type: 'v'
//         },
//         {
//             orderID: 1,
//             cusotmerName: 'Kamala Harris', 
//             vendorName: 'Melt House',
//             time: '',
//             message: 'How long will it take to prepare the order ?',
//             type: 'c'
//         },
//         {
//             orderID: 1,
//             cusotmerName: 'Kamala Harris',
//             vendorName: 'Melt House',
//             time: '',
//             message: "Your order will ready in 30 mins",
//             type: 'v'
//         },
//         {
//             orderID: 1,
//             cusotmerName: 'Kamala Harris',
//             vendorName: 'Melt House',
//             time: '',
//             message: "Thank You, I'm waiting",
//             type: 'c'
//         },
//         {
//             orderID: 1,
//             cusotmerName: 'Kamala Harris',
//             vendorName: 'Melt House',
//             time: '',
//             message: "Your welcome, enjoy your meal as it arrives", 
//             type: 'v'
//         },
//         {
//             orderID: 1,
//             cusotmerName: 'Kamala Harris',
//             vendorName: 'Melt House',
//             time: '',
//             message: "Cool !!!",
//             type: 'c'
//         }
    
// ];
var chats = [];

$(document).ready(function() {
    // sessionStorage.setItem('chats', JSON.stringify(chats));
    chats = JSON.parse(sessionStorage.getItem('chats'));
    console.log(chats);
    renderMessagesCust();
});

function renderMessagesCust() {
    var renderHtml = "";
    var renderHtml2 = "";
    $('#render-message-vend').empty();
    chats.forEach(function(chat) {
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

// function renderMessagesVend() {
//     var renderHtml = "";
//     var renderHtml2 = "";
//     $('#render-message-cust').empty();
//     chats.forEach(function(chat) {
//         if (chat.type == 'c') {
//            renderHtml += ` <div id="render-message-cust">
//            <div class="recieved-message">
//                <span class="primaryText">${chat.message}</span>
//            </div>
//        </div>
//         `
//         } else {
//             renderHtml += `
//             <div id="render-message-vend">
//                         <div class="sent-message">
//                             <div>
//                                 <span class="primaryText">${chat.message}</span>
//                             </div>
//                         </div>
//                     </div>`
//         }
//     })
//     $('#render-message-cust').append(renderHtml);
//     // $('#render-message-cust').append(renderHtml2);
// }

function sendMessageCustomer() {
    var userObj = JSON.parse(sessionStorage.getItem('userobj'));
    var vendorId = sessionStorage.getItem('vendorID');
    var message = $('#message').val();
    var vendorName = "";
    if (vendorId == 1) {
        vendorName = 'Melt House';
    }
    chat = {
        orderID: 1,
        cusotmerName: userObj.name,
        vendorName: 'Melt House',
        time: '',
        message: message,
        type: 'c'
    }
    chats.push(chat);
    sessionStorage.setItem('chats', JSON.stringify(chats));
    renderMessages();
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

