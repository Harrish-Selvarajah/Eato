vendor = [
    {
        id:1,
        name: 'Melt House',
        password: 'abc123'
    },
    {
        id:2,
        name: 'Suburban Kitchen',
        password: 'abc123'
    }
];

$(document).ready(function () { 

});

function login() {
    var userName = $('#usrnm').val();
    var password = $('#pswrd').val();
    
    vendor.forEach(function(user) {
        if (user.name === userName && user.password === password) {
            sessionStorage.setItem('vendorObj', JSON.stringify(user));
            document.location.href = "./vendor-home.html";
        } else {
            console.log('Login Error');
        }
    });
}