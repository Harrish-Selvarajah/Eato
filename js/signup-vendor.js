function signUp() {
    var mobileNumber = $('#mobnum').val();
    var email = $('#email').val();
    var firstName = $('#fnam').val();
    var password = $('#pswrd').val();
    var spsrwd = $('cpswrd').val();

    if (!mobileNumber || mobileNumber.trim() === '') {
        toastr.warning('Please Enter Mobile Number', 'Warning');
    }
    else if (!email || email === '') {
        toastr.warning('Please Enter Email', 'Warning');
    }
    else if (!firstName || firstName === '') {
        toastr.warning('Please Enter Full Name', 'Warning');
    }
    else if (!password || password === '') {
        toastr.warning('Please Enter Password', 'Warning');
    }
    else if (!spsrwd || spsrwd === '') {
        toastr.warning('Please Re Enter Password', 'Warning');
    }
    else {
        console.log("Signup success!");
    }
}