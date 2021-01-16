
var chats = [];
var users = [];
var customerName = "";
var uniqueNames = [];

$(document).ready(function() {
    // sessionStorage.setItem('chats', JSON.stringify(chats));
    
    console.log(sessionStorage);
    chats = JSON.parse(sessionStorage.getItem('chats'));
    console.log(chats);
    renderChatList();
    renderMessagesVend('first');
});

function renderChatList() {
    var renderHtml = "";
    var vendorName = JSON.parse(sessionStorage.getItem('vendorObj')).name;
    chats.forEach(function(user) {
        if (user.vendorName === vendorName) {
            users.push(user.cusotmerName)
        }
    })
    // users = chats.filter(function (item) {return item.vendorName == vendorName});
    $.each(users, function(i, el){
        if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });
    $('chat-list').empty();
    uniqueNames.forEach(function(u) {
        renderHtml += `<div class="chat d-flex" onclick="openChat('${u}')">
        <div class="profile-pic-container">
            <div class="profile-pic"></div>
        </div>
        <div>
            <h4>${u}</h4>
        </div>
    </div>`
    })
    $('#chat-list').append(renderHtml);

    // uniqueNames.forEach(function(u) {
    //     renderHtml += `   <div class="chat d-flex">
    //     <div class="profile-pic-container">
    //         <div class="profile-pic"></div>
    //     </div>
    //     <div>
    //         <h4>${u}</h4>
    //     </div>
    // </div>`
    // })
    // $('#chat-list').append(renderHtml);
}

function renderMessagesVend(name) {
    var renderHtml = "";
    var renderHtml2 = "";
    var fchats = [];
    var ffchats = [];
    
    if (name === 'first') {
        customerName = uniqueNames[0];
    } else {
        customerName = name;
    }
    var vendorName = JSON.parse(sessionStorage.getItem('vendorObj')).name;
    fchats = chats.filter(function (item) {return item.vendorName == vendorName});
    ffchats = fchats.filter(function (item) {return item.cusotmerName == customerName});
     $('#customer-name').text(customerName);
    $('#render-message-cust').empty();
    ffchats.forEach(function(chat) {
        if (chat.type == 'c') {
           renderHtml += ` <div id="render-message-cust">
           <div class="recieved-message">
               <span class="primaryText">${chat.message}</span>
           </div>
       </div>
        `
        } else {
            renderHtml += `
            <div id="render-message-vend">
                        <div class="sent-message">
                            <div>
                                <span class="primaryText">${chat.message}</span>
                            </div>
                        </div>
                    </div>`
        }
    })
    $('#render-message-cust').append(renderHtml);
    // $('#render-message-cust').append(renderHtml2);
}

function openChat(name) {
    $('#render-message-cust').empty();
    var renderHtml = "";
    var renderHtml2 = "";
    var fchats = [];
    var ffchats = [];
    customerName = name;
    var vendorName = JSON.parse(sessionStorage.getItem('vendorObj')).name;
    fchats = chats.filter(function (item) {return item.vendorName == vendorName});
    ffchats = fchats.filter(function (item) {return item.cusotmerName == name});
    $('#customer-name').text(customerName);
    ffchats.forEach(function(chat) {
        if (chat.type == 'c') {
           renderHtml += `<div id="render-message-cust">
           <div class="recieved-message">
               <span class="primaryText">${chat.message}</span>
           </div>
       </div>
        `
        } else {
            renderHtml += `
            <div id="render-message-vend">
                        <div class="sent-message">
                            <div>
                                <span class="primaryText">${chat.message}</span>
                            </div>
                        </div>
                    </div>`
        }
    })
    $('#render-message-cust').append(renderHtml);
    // $('#render-message-cust').append(renderHtml2);
}

function sendMessageVendor() {
    var vendorId = sessionStorage.getItem('vendorID');
    var message = $('#message').val();
    var vendorName = JSON.parse(sessionStorage.getItem('vendorObj')).name;
    chat = {
        orderID: 1,
        cusotmerName: customerName,
        vendorName: vendorName,
        time: '',
        message: message,
        type: 'v'
    }
    chats.push(chat);
    sessionStorage.setItem('chats', JSON.stringify(chats));
    renderMessagesVend(customerName);
}

function openChat() {
    
}