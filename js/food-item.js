var popupAction = null;
var foodId = null;
var fooditem = [
    {
        id: 'm1',
        name: 'Cheese Pasta',
        price: 650,
        foodPicture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
        quantity: 1
    },
    {
        id: 'm2',
        name: 'Chico Fruit Salad',
        price: 650,
        foodPicture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
        quantity: 1
    },
    {
        id: 'm3',
        name: 'Squash Risotto',
        price: 650,
        foodPicture: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
        quantity: 1
    }
];

var cart = [];
var foodQuantity = 1;

$(document).ready(function () {
    console.log('food-item');
    $('#display-quantity').text(foodQuantity);
    $(window).on('resize', function () {
        var win = $(this);
        if (win.width() < 768) {
            $("#food-item-popup").popup("close");
            $('body').css('overflow', 'auto');
        }
    });
    foodId = getUrlParameter('fooditemID');
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function addToCart(id) {
    // var quan = 5;
    var x = 0;
    // cart = JSON.parse(sessionStorage.getItem('cart'));
    fooditem.forEach(function (item) {
        if (item.id == id) {
            item.quantity = foodQuantity;
            cart.push(item);
        }
    })
    console.log(cart);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    console.log(sessionStorage);
    debugger;
    document.location.href = "./customer-vendor.html";
}

function handleFoodItemPopup(action, id) {
    if ($(window).width() < 768) {
        $("#food-item-popup").popup("close");
        $('body').css('overflow', 'auto');
        window.location.href = '../components/food-item.html?fooditemID=' + id;
    }
    else {
        popupAction = action
        if (popupAction === "open") {
            $('body').css('overflow', 'hidden');
            $("#food-item-popup").popup("open");
        }
        else {
            $('body').css('overflow', 'auto');
            $("#food-item-popup").popup("close");
        }
    }
}

function quantity(operation) {
    // debugger;
    // var oriQuantity = $('#display-quantity').value;
    // var oriQuantity = document.getElementById('display-quantity').value;
    console.log(foodQuantity)
    var x;
    if (operation == 'plus') {
        console.log('plus');
        x = foodQuantity = foodQuantity +1;
        $('#display-quantity').text(x);
    } else 
    if (operation == 'minus') {
        console.log('minus');
        x = foodQuantity = foodQuantity -1;
        $('#display-quantity').text(x);
    }
}