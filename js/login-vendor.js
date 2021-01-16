var vendor = [
    {
        id: 1,
        name: 'Melt House',
        password: 'abc123'
    },
    {
        id: 2,
        name: 'Suburban Kitchen',
        password: 'abc123'
    }
];
var userExists = false;

$(document).ready(function () {

});

function login() {
    var userName = $('#usrnm').val();
    var password = $('#pswrd').val();

    if (!userName || userName.trim() === '') {
        toastr.warning('Please Enter User Name', 'Warning');
    }
    else if (!password || password === '') {
        toastr.warning('Please Enter Password', 'Warning');
    }
    else {
        vendor.forEach(function (user) {
            if (user.name === userName && user.password === password) {
                sessionStorage.setItem('vendorObj', JSON.stringify(user));
                document.location.href = "./vendor-home.html";
            }
            else {
                userExists = true
            }
        });
        if (userExists == true) {
            toastr.error('User Does Not Exist', 'Error');
            userExists = false;
        }
    }
}