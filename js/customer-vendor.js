var menu = [
    {
        id: 'm1',
        name: 'Cheesa Pasta',
        price: 650
    },
    {
        id: 'm2',
        name: 'Chico Fruit Salad',
        price: 650
    },
    {
        id: 'm3',
        name: 'Squash Risotto',
        price: 650
    }
];

$(document).ready(function(){ });

function goToRatings() {
    document.location.href = "./customer-review.html";
}

function goToFoodItem(id) {
    document.location.href = "./vendor-review.html?fooditemID="+id;
}