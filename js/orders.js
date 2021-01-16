var pastOrders = [
    {
        id: 1,
        vendorName: 'Melt House',
        orderStatus: 'delivered',
        fooditems: [
            {
                id: 'm1',
                name: 'Cheese Pasta',
                quantity: 2,
                picture: 'https://images.unsplash.com/photo-1587206668283-c21d974993c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
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
                quantity: 1,
                picture: 'https://images.unsplash.com/photo-1568158958563-c13c713d69f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=633&q=80'
            },
            {
                id: 'm2',
                name: 'Cheese Pasta',
                quantity: 3,
                picture: 'https://images.unsplash.com/photo-1587206668283-c21d974993c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
            },
            {
                id: 'm3',
                name: 'Squash Risotto',
                quantity: 2,
                picture: '../assets/food_item.jpg'
            }
        ],
        totalPrice: 4200
    }
];

var cart = [];

$(document).ready(function () {
    var status = document.getElementById('ongoing-order');
    cart = JSON.parse(sessionStorage.getItem('cart'));
    console.log(cart);
    console.log(sessionStorage);
    // debugger;
    if (cart.length == 0) {
        // debugger
        status.style.display = "none";
        // repeatPastOrders();
    } else {
        status.style.display = "grid";
        repeatOngoingOrder();
        // repeatPastOrders();
    }
    // repeatOngoingOrder();
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
            <span class="primaryText">${item.foodName}</span>
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
        pastOrders.forEach(function (y) {
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
    pastOrders.forEach(function (x) {
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
        x.fooditems.forEach(function (y) {
            debugger;
            renderChildHtml += `<div class="d-flex">
            <div class="quantity infoText">${y.quantity}</div>
            <span class="primaryText">${y.name}</span>
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
        var cart = []
        sessionStorage.setItem('cart', JSON.stringify(cart));
        item = {
            foodID: 'm1',
            foodName: 'Cheese Pasta',
            price: 650,
            quantity: 1,
            totalPrice: 1500,
            vendorId: 1,
            vendorName: 'Melt House',
            image: 'https://images.unsplash.com/photo-1587206668283-c21d974993c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
        }
        item2 = {
            foodID: 'm2',
            foodName: 'Chico Fruit Salad',
            price: 650,
            quantity: 1,
            totalPrice: 1500,
            vendorId: 1,
            vendorName: 'Melt House',
            image: 'https://images.unsplash.com/photo-1568158958563-c13c713d69f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=633&q=80'
        }
        cart.push(item);
        cart.push(item2);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        document.location.href = "./cart.html";
    } else {
        if (id == 2) {
            var cart = []
            sessionStorage.setItem('cart', JSON.stringify(cart));
            item = {
                foodID: 'm1',
                foodName: 'Cheese Pasta',
                price: 650,
                quantity: 1,
                totalPrice: 1500,
                vendorId: 1,
                vendorName: 'Melt House',
                image: 'https://images.unsplash.com/photo-1587206668283-c21d974993c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
            }
            item2 = {
                foodID: 'm2',
                foodName: 'Chico Fruit Salad',
                price: 650,
                quantity: 1,
                totalPrice: 1500,
                vendorId: 1,
                vendorName: 'Melt House',
                image: 'https://images.unsplash.com/photo-1568158958563-c13c713d69f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=633&q=80'
            }
            cart.push(item);
            cart.push(item2);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            document.location.href = "./cart.html";
        }
    }
}
