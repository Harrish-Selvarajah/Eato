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

$(document).ready(function() { 
    var fooditemID = getUrlParameter('fooditemID');
    console.log(fooditemID, 'fooditemID');
    debugger;
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
   cart = JSON.parse(sessionStorage.getItem('cart'));
   fooditem.forEach(function (item) {
       if (item.id == id) {
           cart.push(item);
       }
   })
   sessionStorage.setItem('cart', JSON.stringify(cart)); 
}