var pastOrders = [
    {
        id: 1,
        vendorName: 'Melt House',
        orderStatus: 'delivered',
        fooditems: [
            {
                id: 'm1',
                name: 'Cheese Pasta',
                quantity: 2
            },
        ],
        totalPrice: 2100
    },
    {
        id: 2,
        vendorName: 'Melt House',
        orderStatus: 'delivered',
        fooditems: [
            {
                id: 'm1',
                name: 'Chico Fruit Salad',
                quantity: 1
            },
            {
                id: 'm2',
                name: 'Cheese Pasta',
                quantity: 3
            },
            {
                id: 'm3',
                name: 'Squash Risotto',
                quantity: 2
            }
        ],
        totalPrice: 4200
    }
];

var cart = [];

$(document).ready(function () {
    cart = JSON.parse(sessionStorage.getItem('cart'));
    console.log(cart);
    console.log(sessionStorage);
    repeatOngoingOrder();
    // repeatPastOrders();
    // an();
});


function repeatOngoingOrder() {
    // debugger;
    var renderHtml = "";
    if (cart.length > 0) {
        // debugger;
        cart.forEach(function (item) {
            renderHtml += `  <div class="d-flex">
            <div class="quantity infoText">${item.quantity}</div>
            <span>${item.foodName}</span>
        </div>`
        $('#vendor-name').text(item.vendorName);
        $('#ongoing-price').text('Rs' + item.totalPrice);
        })
        $('#repeat-ongoing-order-items').append(renderHtml);
       
    }
   
}

function repeatPastOrders() {
    // debugger;
    var renderHtml = "";
    if (pastOrders.length > 0) {
        pastOrders.forEach(function(item) {
                renderHtml += `  <div class="order-item">
                <div class="order-item-details">
                    <div class="store-details">
                        <div class="layer"></div>
                        <div>
                            <h3>Melt House</h3>
                            <a class="secondaryText">View Store</a>
                        </div>
                    </div>
                    <div class="order-details">
                        <div class="order-status d-flex">
                            <div>
                                <div class="d-flex">
                                    <i class="material-icons">check_circle_outline</i>
                                    <p class="subtitle">Order delivered</p>
                                </div>
                                <h4>On Going</h4>
                                <p class="secondaryText">Order #E3B47</p>
                            </div>
                            <div>
                                <div class="action-btn">
                                    <button type="button">
                                        <p class="primaryText">Order Again</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="item-details" id="repeat-past-items">
                             
                        </div>
                        <hr />
                        <div class="order-total d-flex">
                            <h4>Total</h4>
                            <h4>${y.totalPrice}</h4>
                        </div>
                        <div>
                            <button type="button">
                                <p class="primaryText">RATE VENDOR</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="order-divider"></div>`
        })
       
    }
    $('#repeat-past-orders').append(renderHtml);
    an();
}

function an() {
    // debugger;
    var id = 0;
    var renderParentHtml = "";
    var renderChildHtml = "";
    pastOrders.forEach(function(x){
        id = x.id;
        renderParentHtml += `<div class="order-item">
        <div class="order-item-details">
            <div class="store-details">
                <div class="layer"></div>
                <div>
                    <h3>Melt House</h3>
                    <a class="secondaryText">View Store</a>
                </div>
            </div>
            <div class="order-details">
                <div class="order-status d-flex">
                    <div>
                        <div class="d-flex">
                            <i class="material-icons">check_circle_outline</i>
                            <p class="subtitle">Order delivered</p>
                        </div>
                        <h4>On Going</h4>
                        <p class="secondaryText">Order #E3B47</p>
                    </div>
                    <div>
                        <div class="action-btn">
                            <button type="button">
                                <p class="primaryText">Order Again</p>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="item-details" id="repeat-past-items-${x.id}">
                     
                </div>
                <hr />
                <div class="order-total d-flex">
                    <h4>Total</h4>
                    <h4>Rs ${x.totalPrice}</h4>
                </div>
                <div>
                    <button type="button">
                        <p class="primaryText">RATE VENDOR</p>
                    </button>
                </div>
            </div>
        </div>
        <div class="order-divider"></div>`
        x.fooditems.forEach(function(y) {
            debugger;
            renderChildHtml += `<div class="d-flex">
            <div class="quantity infoText">${y.quantity}</div>
            <span>${y.name}</span>
        </div>`
        })
       
    })
    $('#repeat-past-orders').append(renderParentHtml);
    $(`#repeat-past-items-${id}`).append(renderChildHtml);
}

function rateVendor(id) {
    window.location.href = '../components/write-review.html?vendorID=' + id;
}

function orderAgain(id) {
    if (id == 1) {
        debugger;
        var cart = []
        sessionStorage.setItem('cart', JSON.stringify(cart));
        item = {
            foodID: 1,
            foodName: 'Yellow Rice Chicken Meatballs',
            price: 650,
            quantity: 1,
            totalPrice: 1500,
            vendorId: 1,
            vendorName: 'Melt House'
        }
        item2 = {
            foodID: 2,
            foodName: 'Fried Rice',
            price: 650,
            quantity: 1,
            totalPrice: 1500,
            vendorId: 1,
            vendorName: 'Melt House'
        }
        cart.push(item);
        cart.push(item2);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        document.location.href = "./cart.html";
    } else {
        if (id == 2) {
            var cart = []
            sessionStorage.setItem('cart', JSON.stringify(cart));
            item1 = {
                foodID: 1,
                foodName: 'Yellow Rice Chicken Meatballs',
                price: 650,
                quantity: 1,
                totalPrice: 1500,
                vendorId: 1,
                vendorName: 'Melt House'
            }
            item2 = {
                foodID: 2,
                foodName: 'Fried Rice',
                price: 650,
                quantity: 1,
                totalPrice: 1500,
                vendorId: 1,
                vendorName: 'Melt House'
            }
            cart.push(item);
            cart.push(item2);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            document.location.href = "./cart.html";
        }
    }
}
