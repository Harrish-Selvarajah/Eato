function login() {
    cart = [];
    var firstName = $('#usrnm').val();
    var password = $('#pswrd').val();

    if (!firstName || firstName.trim() === '') {
        toastr.warning('Please Enter User Name', 'Warning');
    }
    else if (!password || password === '') {
        toastr.warning('Please Enter Password', 'Warning');
    }
    else {
        console.log('Login Success');
    }
}