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
        rating: 4.9,
        name: 'Melt House',
        type: 'Rice',
        img: '../assets/food/indian.jpg',
        logo: '../assets/vendor_logo.png',
        foodItems: [
            {
                id: 'm1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: 'https://images.unsplash.com/photo-1587206668283-c21d974993c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'm2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: 'https://images.unsplash.com/photo-1568158958563-c13c713d69f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'm3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 2,
        rating: 3,
        name: 'Suburban Kitchen',
        type: 'Pizza',
        img: '../assets/food/suburban.jpeg',
        logo: '../assets/vendor_logo.png',
        foodItems: [
            {
                id: 's1',
                name: 'Beast Burger',
                price: 650,
                foodPicture: 'https://images.unsplash.com/photo-1565060050382-f180053db6fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 's2',
                name: 'Shrimp Delight',
                price: 650,
                foodPicture: 'https://images.unsplash.com/photo-1605209918106-39492bee031d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 's3',
                name: 'Waffles',
                price: 650,
                foodPicture: 'https://images.unsplash.com/photo-1513456753721-b3f94be66822?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
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
        img: '../assets/food/italian.jpg',
        logo: '../assets/vendor_logo.png',
        foodItems: [
            {
                id: 'i1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'i2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'i3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
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
        logo: '',
        foodItems: [
            {
                id: 'd1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'd2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'd3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 6,
        rating: 5.0,
        name: 'Ammas Samayal',
        type: 'Rice',
        img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        foodItems: [
            {
                id: 'a1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    },
    {
        id: 5,
        rating: 4.5,
        name: 'Home Foods',
        type: 'Rice',
        img: 'https://images.unsplash.com/photo-1545225015-77b095551f9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1269&q=80',
        foodItems: [
            {
                id: 'h1',
                name: 'Cheese Pasta',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'h2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'h3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
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
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'v2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'v3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
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
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'mc2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'mc3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
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
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'c2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'c3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
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
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'g2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'g3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
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
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'n2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'n3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
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
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a2',
                name: 'Chico Fruit Salad',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            },
            {
                id: 'a3',
                name: 'Squash Risotto',
                price: 650,
                foodPicture: '../assets/food_item.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipi scing elit. Maecenas blandit neque ut eros cons ectetur, vel porta sem sodales. Maecenas mollis feugiat maximus. Donec vehicula tincidu nt he ndrerit. Proin pellentesque lectus ac ex ia culis, nec cursus tortor accumsan. Sed ante dui, dignissim vitae laoreet in, cursus id magna.',
                quantity: 1
            }
        ]
    }
];

var firebaseConfig = {
    apiKey: "AIzaSyBDwiPGqXFeormDpnISyavzwju3BnCUPTo",
    authDomain: "eato-69.firebaseapp.com",
    databaseURL: "https://eato-69-default-rtdb.firebaseio.com",
    projectId: "eato-69",
    storageBucket: "eato-69.appspot.com",
    messagingSenderId: "274943061802",
    appId: "1:274943061802:web:9916cf1cb84f515bdab853"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var cart = [];
var foodQuantity = 1;
var vendorID = 0;
var vendors = [];

$(document).ready(function () {

    
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
    firebase.database().ref('Vendors/').once('value', function (snapshot) {
        $(".se-pre-con").fadeOut("fast");
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            //   var childData = childSnapshot.val();
          debugger
            //   reviews.push(childData);
            item = {
              id: childSnapshot.key,
              name: childData.name,
              reviews : childData.reviews
            }
            vendors.push(item);
        })
        console.log(vendors);
        sessionStorage.setItem('vendors', JSON.stringify(vendors));
        renderVendorDetails();
        renderFooditemsInVendor();
        renderFooditem();
      })
  

    $('#close-button').click(function (e) {
        $('#food-item-popup').popup('close')
    });

   


});

function renderVendorDetails() {
    debugger
    var renderHtml = "";
    var renderHTML = "";
    vendorID = JSON.parse(sessionStorage.getItem('vendorID'));
    if (Number(vendorID) !== 0) {
        vendor.forEach(function (ven) {
            if (ven.id == Number(vendorID)) {
                renderHTML += `<img class="backdrop" src="${ven.img}">
                <div class="bookmark">
                    <h4>50 %</h4>
                    <h3>OFF</h3>
                    <br>
                </div>
                <div class="icon-container" id="fav-icon-container">
                    <i class=" material-icons icon-fav" id="fav-icon">favorite_border</i>
                    <!-- <i class=" material-icons icon-fav">favorite</i> -->
                </div>
                <img id="logo" class="vendor-logo" src="${ven.logo}">`

                renderHtml += `<h1 id="vendor-name">${ven.name}</h1>
                <div class="vendor-highlights">
                    <p class="subtitle">Indian, Dosa, Vada</p>
                    <p class="subtitle">•</p>
                    <div class="vendor-highlight-rating">
                        <p class="subtitle" id="rating">4.1</p>
                        <i class="material-icons">grade</i>
                        <p class="subtitle">(</p>
                        <a class="subtitle" onclick="goToRatings(${ven.id});" id="numOfRating">10+ ratings</a>
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
        $('.vendor-bg').append(renderHTML);
        $('#vendor-details').append(renderHtml);

        var vendors = [];
        debugger
   vendors = JSON.parse(sessionStorage.getItem('vendors'));
   vendors.forEach(function (item) {
       if (item.id == Number(vendorID)) {
        var total = 0,avg = 0,count = 0;
        Object.values(item.reviews).forEach(function (rev) {
            total = total + rev.rating;
            count = count + 1;
        })
        avg = total / count;
        avg = Math.round(avg)
        $('#rating').text(avg/10);
        $('#numOfRating').text(`${count-1}` + `+ ratings`);
       }
   })
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
                        <img src=${y.foodPicture}>
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
                                        <div class="item-bg">
                                            <img src="${y.foodPicture}">
                                        </div>
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
                                            <p>${y.description}</p>
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
    vendor.forEach(function (vendor) {
        if (vendor.id === vendorID) {
            vendor.foodItems.forEach(function (item) {
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
                        totalPrice: 0,
                        image: item.foodPicture
                    }
                    cart.push(items);
                }
            })
            sessionStorage.setItem('cart', JSON.stringify(cart));
        }
    })

    toastr.success('Added To Cart', 'Success');
    sessionStorage.setItem('cart', JSON.stringify(cart));

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
                    renderHtml += `<div class="fipw-item-bg">
                            <img src="${y.foodPicture}">
                            <div onclick="handleFoodItemPopup('close', 'null');" class="icon-container icon-close">
                                <i class=" material-icons">close</i>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div class="d-flex fipw-item-details">
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
                                            <span id="display-quantity">1</span>
                                            <button class="quantity-plus" onclick="quantity('plus')">
                                                <i class="material-icons">add</i>
                                            </button>
                                        </div>
                                        <div class="fipw-item-description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum non ante
                                                tristique
                                                rutrum.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="action-btn">
                                            <button type="button" onclick="addToCart('${y.id}')">
                                                <p class="primaryText">Add To Cart</p>
                                            </button>
                                        </div>
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
    var x;
    if (operation == 'plus') {
        x = foodQuantity = foodQuantity + 1;
        $('#display-quantity').text(x);
    } else
        if (operation == 'minus') {
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