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

var vendor = [
    {
        id: 1,
        rating: 5,
        name: 'Melt House',
        foodItems: [
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
        ]
    },
    {
        id: 2,
        rating: 5,
        name: 'Suburban Kitchen',
        foodItems: [
            {
                id: 's1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 's2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 's3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    }
];

var cart = [];
var foodQuantity = 1;
var vendorID = 0;

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
    vendorID = getUrlParameter('vendorID');
    renderVendorDetails();
    renderFooditemsInVendor();
    renderFooditem();

    $('#close-button').click(function (e) {
        $('#food-item-popup').popup('close')
    });
});

function renderVendorDetails() {
    var renderHtml = "";
    vendorID = JSON.parse(sessionStorage.getItem('vendorID'));
    if (Number(vendorID) !== 0) {
        vendor.forEach(function (ven) {
            if (ven.id == Number(vendorID)) {
                renderHtml += `<h1 id="vendor-name">${ven.name}</h1>
                <div class="vendor-highlights">
                    <p class="subtitle">Indian, Dosa, Vada</p>
                    <p class="subtitle">•</p>
                    <div class="vendor-highlight-rating">
                        <p class="subtitle">4.1</p>
                        <i class="material-icons">grade</i>
                        <p class="subtitle">(</p>
                        <a class="subtitle" onclick="goToRatings(${ven.id});">10+ ratings</a>
                        <p class="subtitle">) </p>
                    </div>
                    <p class="subtitle">•</p>
                    <p class="subtitle"> $$</p>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum non ante tristique
                    rutrum. Vivamus neque turpis,
                    scelerisque eget dapibus id, dictum ut dui. Nullam placerat porta eros vitae cursus. Aliquam
                    porttitor, eros non feugiat
                    dapibus, felis metus condimentum purus, iaculis convallis purus arcu at dolor.</p>`
            }
        })
        $('#vendor-details').append(renderHtml);
    }
}

function renderFooditemsInVendor() {
    var renderHtml = "";
    vendorID = JSON.parse(sessionStorage.getItem('vendorID'));
    if (Number(vendorID) !== 0) {
        vendor.forEach(function (x) {
            if (x.id == Number(vendorID)) {
                x.foodItems.forEach(function (y) {
                    renderHtml += `<li onclick="handleFoodItemPopup('open', '${y.id}');" class="food-item">
                    <div>
                        <img src="../assets/food_item.jpg">
                    </div>
                    <div class="food-item-details">
                        <h4>${y.name}</h4>
                        <div>
                            <span class="primaryText">Rs</span>
                            <span>${y.price}</span>
                        </div>
                    </div>
                </li>`
                })
            }
        })
        $('#menu-items').append(renderHtml);
    }
}

function renderFooditem() {
    // debugger;
    var renderHtml = "";
    vendorID = JSON.parse(sessionStorage.getItem('vendorID'));
    vendor.forEach(function (x) {
        if (x.id == Number(vendorID)) {
            x.foodItems.forEach(function (y) {
                if (foodId == y.id) {
                    renderHtml += `<div class="main-container food-item-page">
               <div class="item-bg"></div>
               <div class="d-flex item-details">
                   <h4 id="food-name">${y.name}</h4>
                   <div>
                       <span>Rs</span>
                       <span id="price">${y.price}</span>
                   </div>
               </div>
               <div class="adjust-quantity food-item-page-quantity">
                   <button class="quantity-minus" onclick="quantity('minus')">
                       <i class="material-icons">remove</i>
                   </button>
                   <span id="display-quantity" class="subtitle">1</span>
                   <button class="quantity-plus" onclick="quantity('plus')">
                       <i class="material-icons">add</i>
                   </button>
               </div>
               <div class="item-description">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum non ante tristique
                       rutrum.</p>
               </div>
               <div>
                   <div>
                       <div class="action-btn">
                           <button type="button" onclick="addToCart('${y.id}')">
                               <p class="primaryText">Add To Cart</p>
                           </button>
                       </div>
                   </div>
               </div>
           </div>`
                }
            })
            $('#render-food-item').append(renderHtml);
        }
    })
}


function addToCart(id) {
    // var quan = 5;
    var x = 0;
    cart = JSON.parse(sessionStorage.getItem('cart'));
    vendorID = JSON.parse(sessionStorage.getItem('vendorID'));
    fooditem.forEach(function (item) {
        if (item.id == id) {
            // item.quantity = foodQuantity;
            var vendorName = "";
            if (vendorID == 1) {
                vendorName = 'Melt House';
            }
            items = {
                vendorID: vendorID,
                vendorName: vendorName,
                foodID: item.id,
                foodName: item.name,
                price: item.price,
                quantity: foodQuantity,
                totalPrice: 0
            }
            cart.push(items);
        }
    })

    toastr.success('Added To Cart', 'Success');
    console.log(cart);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    console.log(sessionStorage);

    if (!detectMobileWithAgent()) {
        $("#food-item-popup").popup("close");
        $('body').css('overflow', 'auto');
    }
    else {
        setTimeout(function () { document.location.href = "./customer-vendor.html"; }, 500);
    }
}

function handleFoodItemPopup(action, id) {
    // debugger;
    if (detectMobileWithAgent()) {
        $("#food-item-popup").popup("close");
        $('body').css('overflow', 'auto');
        window.location.href = '../components/food-item.html?fooditemID=' + id;
    }
    else {

        popupAction = action
        if (popupAction === "open") {
            renderPopup(id);
            $('body').css('overflow', 'hidden');
            $("#food-item-popup").popup("open");


        }
        else {
            $('body').css('overflow', 'auto');
            $("#food-item-popup").popup("close");
        }
    }
}

function renderPopup(foodId) {
    var renderHtml = "";
    // $(".d-flex").remove();
    $('#render-fooditem-popup').empty()
    vendorID = JSON.parse(sessionStorage.getItem('vendorID'));
    vendor.forEach(function (x) {
        if (x.id == Number(vendorID)) {
            x.foodItems.forEach(function (y) {
                if (foodId == y.id) {
                    renderHtml += `<div class="d-flex fipw-item-details">
                    <h4>${y.name}</h4>
                    <div>
                        <span>Rs</span>
                        <span>${y.price}</span>
                    </div>
                </div>
                <div class="adjust-quantity fipw-food-item-page-quantity">
                    <button class="quantity-minus" onclick="quantity('minus')">
                        <i class="material-icons">remove</i>
                    </button>
                    <span id="display-quantity" class="subtitle">1</span>
                    <button class="quantity-plus" onclick="quantity('plus')">
                        <i class="material-icons">add</i>
                    </button>
                </div>
                <div class="fipw-item-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum non ante
                        tristique
                        rutrum.</p>
                </div>
                <div>
                                <div class="action-btn">
                                    <button type="button"  onclick="addToCart('${y.id}')">
                                        <p class="primaryText">Add To Cart</p>
                                    </button>
                                </div>
                            </div>`
                }
            })
            $('#render-fooditem-popup').append(renderHtml);
        }
    })
}

function quantity(operation) {
    // debugger;
    var oriQuantity = $('#display-quantity').value;
    var oriQuantity = document.getElementById('display-quantity').value;
    var vallue = $('#display-quantity').html();
    console.log(vallue, 'val');
    var x;
    if (operation == 'plus') {
        console.log('plus');
        x = foodQuantity = foodQuantity + 1;
        $('#display-quantity').text(x);
    } else
        if (operation == 'minus') {
            console.log('minus');
            x = foodQuantity = foodQuantity - 1;
            $('#display-quantity').text(x);
        }
}

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

function navigateToHome() {
    document.location.href = './home.html'
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