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

$(document).ready(function () {
    // var fooditemID = getUrlParameter('fooditemID');
    // console.log(fooditemID, 'fooditemID');
    // debugger;
   
    var status = document.getElementById('cart-filled');
    var status1 = document.getElementById('cart-empty');
    cart = JSON.parse(sessionStorage.getItem('cart'));
    console.log(cart);
    if (cart.length == 0) {
        status.style.display = "none";
        status1.style.display = "flex";
    } else {
        status.style.display = "flex";
        status1.style.display = "none";
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
            totalPrice = totalPrice + item.price;
            $('#totalPrice').text('Rs' + totalPrice);
            renderHtml += `
        <!-- Start Item -->
        <div class="cards cart-item">
            <div>
                <img src="../assets/food_item.jpg">
            </div>
            <div class="food-item-details">
                <h4>${item.name}</h4>
                <div>
                    <span>Rs</span>
                    <span>${item.price}</span>
                </div>
            </div>
            <div class="adjust-quantity food-item-page-quantity">
                <button class="quantity-minus">
                    <i class="material-icons">remove</i>
                </button>
                <span id="display-quantity">1</span>
                <button class="quantity-plus">
                    <i class="material-icons">add</i>
                </button>
            </div>
            <i onclick="removeItem('${item.id}')" class="material-icons">close</i>
        </div>
       `
        });
        $('#repeat').append(renderHtml);
        subTotal = totalPrice + 250;
        $('#subTotal').text('Rs' + subTotal);
    }
}

function removeItem(id) {
    console.log('removeItem')
    cart = cart.filter(function (item) { return item.id !== id });
    repeat();
    // sessionStorage.setItem('cart', JSON.stringify(cart));
}

function clearCart() {
    console.log("clear cart");
    var status = document.getElementById('cart-filled');
    var status1 = document.getElementById('cart-empty');
    status.style.display = "none";
    status1.style.display = "flex";
    cart = [];
    sessionStorage.setItem('cart', JSON.stringify(cart));
    console.log(sessionStorage);
}

function checkout() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    
}