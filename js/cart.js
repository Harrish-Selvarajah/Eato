var fooditem = [
    {
        id: 'm1',
        name: 'Cheese Pasta',
        price: 650,
        foodPicture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.'
    },
    {
        id: 'm2',
        name: 'Chico Fruit Salad',
        price: 650,
        foodPicture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.'
    },
    {
        id: 'm3',
        name: 'Squash Risotto',
        price: 650,
        foodPicture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.'
    }
];
var cart = [];
var totalPrice = 0;
var subTotal = 0;
var loyaltyPoints = 0;

$(document).ready(function () {
    // var fooditemID = getUrlParameter('fooditemID');
    // console.log(fooditemID, 'fooditemID');
    // debugger;

    var status = document.getElementById('cart-filled');
    var status1 = document.getElementById('cart-empty');
    cart = JSON.parse(sessionStorage.getItem('cart'));
    console.log(cart);
    if (cart.length == 0) {
        status.style.display = "none !important";
        status1.style.display = "block !important";
    } else {
        status1.style.display = "none !important";
        if ($(window).width() < 768) {
            status.style.display = "block";
        }
        else {
            status.style.display = "grid";
        }
    }
    repeat();
});

function repeat() {
    totalPrice = 0;
    subTotal = 0;
    var status = document.getElementById('totalPrice');
    $(".cart-item").remove();
    var renderHtml = "";
    if (cart.length > 0) {
        cart.forEach(function (item) {
            // debugger;
            totalPrice = totalPrice + (item.price * item.quantity);
            $('#totalPrice').text('Rs' + totalPrice);
            item.totalPrice = totalPrice + 250;
            renderHtml += `
        <!-- Start Item -->
        <div class="cards cart-item">
            <div>
                <img src="../assets/food_item.jpg">
            </div>
            <div class="food-item-details">
                <h4>${item.foodName}</h4>
                <div>
                    <span class="subtitle">Rs</span>
                    <span>${item.price}</span>
                </div>
            </div>
            <div class="adjust-quantity food-item-page-quantity">
                <button class="quantity-minus" id="dec-${item.foodID}" onclick=decQuantity('${item.foodID}')>
                    <i class="material-icons">remove</i>
                </button>
                <span id="display-quantity-${item.foodID}" class="subtitle">${item.quantity}</span>
                <button class="quantity-plus" id="inc-${item.foodID}" onclick=incQuantity('${item.foodID}')>
                    <i class="material-icons">add</i>
                </button>
            </div>
            <i onclick="removeItem('${item.foodID}')" class="material-icons">close</i>
        </div>
       `
            //    $('#display-quantity').text(5);
        });
        $('#repeat').append(renderHtml);
        subTotal = totalPrice + 250;
        $('#subTotal').text('Rs' + subTotal);
        // $('#display-quantity').text(5);
    }
}

function removeItem(id) {
    // debugger
    console.log('removeItem')
    cart = cart.filter(function (item) { return item.foodID !== id });
    repeat();
    // sessionStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    console.log("clear cart");
    var status = document.getElementById('cart-filled');
    var status1 = document.getElementById('cart-empty');
    status.style.display = "none";
    status1.style.display = "grid";
    cart = [];
    sessionStorage.setItem('cart', JSON.stringify(cart));
    console.log(sessionStorage);
}

function checkout() {
    // calculateLoyaltyPoints();
    console.log(cart);
    //console.log(total)
    sessionStorage.setItem('cart', JSON.stringify(cart));
    sessionStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    document.location.href = './order-confirmation.html'
}

function calculateTotal(value, id, operation) {
    cart.forEach(function (item) {
        if (item.foodID == id) {
            // debugger;
            if (operation == 'add') {
                totalPrice = totalPrice + item.price;
                $('#totalPrice').text('Rs' + totalPrice);
                subTotal = totalPrice + 250;
                $('#subTotal').text('Rs' + subTotal);
                item.quantity = value;
                item.totalPrice = subTotal;
            } else {
                totalPrice = totalPrice - item.price;
                $('#totalPrice').text('Rs' + totalPrice);
                subTotal = totalPrice + 250;
                $('#subTotal').text('Rs' + subTotal);
                item.quantity = value;
                item.totalPrice = subTotal;
            }

            // cartItem = {
            //     vendorName: item.vendorName
            // }
        }
    })
}

// function quantity(operation, id) {
//     debugger;
//     var vallue = $(`#display-quantity-${id}`).html();
//     console.log(vallue, 'val');
//     var x;
//     if (operation == 'plus') {
//         console.log('plus');
//         // x = foodQuantity = foodQuantity +1;
//         $('#display-quantity').text(vallue+1);
//         calculateTotal(vallue+1, id);
//     } else 
//     if (operation == 'minus') {
//         console.log('minus');
//         // x = foodQuantity = foodQuantity -1;
//         $('#display-quantity').text(vallue-1, id);
//     }
// }

function incQuantity(id) {
    // debugger
    var vallue = $(`#display-quantity-${id}`).html();
    console.log(vallue, 'val');
    x = vallue + 1;
    console.log(x);
    $(`#display-quantity-${id}`).text(Number(vallue) + 1);
    calculateTotal(Number(vallue) + 1, id, 'add');
}

function decQuantity(id) {
    // debugger
    var vallue = $(`#display-quantity-${id}`).html();
    console.log(vallue, 'val');
    $(`#display-quantity-${id}`).text(Number(vallue) - 1);
    calculateTotal(Number(vallue) - 1, id, 'min');
}

function calculateLoyaltyPoints() {
    // 10 loyalty points == Rs 1
    loyaltyPoints = 10 * totalPrice;
    sessionStorage.getItem('loyaltyP')
    sessionStorage.setItem('loyaltyPoints', loyaltyPoints);
}