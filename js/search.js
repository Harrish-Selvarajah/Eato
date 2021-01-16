// Global Variables 

var vendorList = [
    {
        id: 1,
        rating: 4.9,
        name: 'Melt House',
        type: 'Rice',
        img: '../assets/food/indian.jpg',
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
        rating: 4.5,
        name: 'Suburban Kitchen',
        type: 'Pizza',
        img: '../assets/food/bakery.jpg',
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
    },
    {
        id: 3,
        rating: 4.9,
        name: 'Italian Cuisine',
        type: 'Burger',
        img: '../assets/food/Desserts.jpg',
        foodItems: [
            {
                id: 'i1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'i2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'i3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 4,
        rating: 4.5,
        name: 'Dessert Dine',
        type: 'Pasta',
        img: '../assets/food/italian.jpg',
        foodItems: [
            {
                id: 'd1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'd2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'd3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 5,
        rating: 5.0,
        name: 'Ammas Samayal',
        type: 'Rice',
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        foodItems: [
            {
                id: 'a1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 6,
        rating: 4.5,
        name: 'Home Foods',
        type: 'Rice',
        img: 'https://images.unsplash.com/photo-1545225015-77b095551f9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1269&q=80',
        foodItems: [
            {
                id: 'h1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'h2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'h3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 7,
        rating: 3.5,
        name: 'Veetu Samayal',
        type: 'Rice',
        img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
        foodItems: [
            {
                id: 'v1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'v2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'v3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 8,
        rating: 2.5,
        name: 'Masala Cafe',
        type: 'Burger',
        img: 'https://images.unsplash.com/photo-1436564989038-18b9958df72b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=1350&q=80',
        foodItems: [
            {
                id: 'mc1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'mc2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'mc3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 9,
        rating: 4.0,
        name: 'Crusty Crabs',
        type: 'Pizza',
        img: 'https://images.unsplash.com/photo-1609834265242-75d58b7db409?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        foodItems: [
            {
                id: 'c1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'c2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'c3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 10,
        rating: 1.0,
        name: 'Green Curry',
        type: 'Pasta',
        img: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        foodItems: [
            {
                id: 'g1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'g2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'g3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 11,
        rating: 2.5,
        name: 'Namaste',
        type: 'Rice',
        img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        foodItems: [
            {
                id: 'n1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'n2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'n3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 12,
        rating: 4.8,
        name: 'Island grill',
        type: 'Rice',
        img: 'https://images.unsplash.com/photo-1563310761-f8d8ed164063?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
        foodItems: [
            {
                id: 'a1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    }
];

var imgRef = [
    "../assets/food/Burger.jpg",
    "../assets/food/italian.jpg",
    "../assets/food/Desserts.jpg"
]

console.log(imgRef[Math.floor(Math.random() * imgRef.length)])

sortFilterQuery = {
    sort : "none",
    filter : 0
}

$(document).ready(function () {
    $(".bottom-nav").removeClass("slideup")
    $(".item").click(function () {
        $(".item.active-state").removeClass("active-state");
        $(this).addClass("active-state");
    });
});

function searchVendor() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let title = document.getElementsByClassName('vendor-title');
    let card = document.getElementsByClassName('section-card');

    for (i = 0; i < title.length; i++) {
        if (!title[i].innerHTML.toLowerCase().includes(input)) {
            card[i].style.display = "none";
        }
        else {
            card[i].style.display = "unset";
            ;
        }
    }
}


function loadData(){
    //vendorList = JSON.parse(sessionStorage.getItem('userobj'))
}


function populateVendors(){

    $section = $('#section')

    var sectionCard = ""

    vendorList.forEach((vendor, idx) => {

        sectionCard = sectionCard.concat(
               `
               <div class="section-card" id ="vendor-${idx}">
                    <div class="vendor-img">
                        <img src = ${vendor.img}>
                    </div>
                    <div class="vendor-details">
                        <div class="vendor-title" id="vendor-name"> ${vendor.name} </div>
                        <div class="vendor-ratings" id="vendor-rating">${vendor.rating} <i class="material-icons start-icon">star</i></div>
                    </div>

                </div>
               ` )
    });

    $section.append(sectionCard)
}

$(document).ready(function () {  

    loadData();
    populateVendors();

    // Selecting Stars 
$('#star-container i').click(function (e) { 
    
    sortFilterQuery['filter'] = 0;

    if (e.target.id == "star-1" && $(`#star-1`).hasClass('selected') && $(`#star-2`).hasClass('unselected')){
        $(`#${e.target.id}`).removeClass('selected')
        $(`#${e.target.id}`).addClass('unselected')
        
    }else{
    var done = false;
    $('#star-container i').each(function (idx,element) {
       
        if(!done){
            $(`#${element.id}`).removeClass('unselected')
            $(`#${element.id}`).addClass('selected')
        }else{
            $(`#${element.id}`).removeClass('selected')
            $(`#${element.id}`).addClass('unselected')
        }

        if(e.target.id == element.id){
            done = true;
            sortFilterQuery['filter'] = idx + 1;
        }
    });
}

});


// Highlighlight selection in filter
$('#sort-catagory-sorting div').click(function(e){
    sortFilterQuery['sort'] = 'none';
    var event = `#{e.target.value}`
if(! $(`#${e.target.id}`).hasClass('button-selected')){
    $('#sort-catagory-sorting div').each(function (idx,element) {  
         
        if(e.target.id == element.id){
            $(`#${e.target.id}`).removeClass('button-unselected')
            $(`#${e.target.id}`).addClass('button-selected')
            sortFilterQuery['sort'] = e.target.id;
        }else{
            $(`#${element.id}`).removeClass('button-selected')
            $(`#${element.id}`).addClass('button-unselected')
        }
    });
}else{
    $(`#${e.target.id}`).removeClass('button-selected')
    $(`#${e.target.id}`).addClass('button-unselected')
}
     });

$('#confirm-filter').click(function (e) { 
    filterPOI();
    $('#filter-popup').popup('close')
        
    });

$('.quick-filter').click(function(e){
      filterWithType(e);
});

$('#filter-sorter').click(function(e) {  
    filterWithType(e)
})

});


function filterPOI() {
    console.log(sortFilterQuery)
    var sort = sortFilterQuery.sort;
    var filter = sortFilterQuery.filter
    
    // Filter First 
    vendorList.forEach(function(element,idx){
        if (element.rating < filter){
             $(`#vendor-${idx}`).css('display','none')
        }else{
          $(`#vendor-${idx}`).css('display','block')
        }
   });

   // Sort
   var sectionChildrenElements = $('#section .section-card')
   if (sort == "a-z"){
    sectionChildrenElements = sortFromAtoZ(sectionChildrenElements);
   }else if (sort == "z-a"){
    sectionChildrenElements = sortFromZtoA(sectionChildrenElements);
   }else if (sort == "rating"){
    sectionChildrenElements = sortByRating(sectionChildrenElements);
   }
   
   $('#section').empty();
   $('#section').append(sectionChildrenElements)

   // finally clear search

   document.getElementById("search").value = ""
}

function sortFromAtoZ(venList) {  

    venList = venList.sort(function(a,b){
        var last = $(`#${a.id}`).find('#vendor-name').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-name').text().toLowerCase()
        
        if (first > last){
            return -1;
        }else if(last > first){
            return 1;
        }

        return 0;
    })

  return venList;
}


function sortFromZtoA(venList) {  

    venList = venList.sort(function(a,b){
        var last = $(`#${a.id}`).find('#vendor-name').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-name').text().toLowerCase()
        
        if (first < last){
            return -1;
        }else if(last < first){
            return 1;
        }

        return 0;
    })

  return venList;
}

function sortByRating(venList){

    venList = venList.sort(function(a,b){
        var last = $(`#${a.id}`).find('#vendor-rating').text().toLowerCase()
        var first = $(`#${b.id}`).find('#vendor-rating').text().toLowerCase()
        
        if (first < last){
            return -1;
        }else if(last < first){
            return 1;
        }

        return 0;
    })

  return venList;
}

function  filterWithType(e){  
     console.log($(`e.target.id`).hasClass('active-state'))
   
     vendorList.forEach(function(element,idx){
         if(e.target.id == element.type){
            $(`#vendor-${idx}`).css('display','block')
         }else{
            $(`#vendor-${idx}`).css('display','none')
         }
     })
    
}
