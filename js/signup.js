$(document).ready(function(){
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
      var rootRef = new Firebase("https://eato-69-default-rtdb.firebaseio.com/").ref();


});

function signUp() {
    var mobileNumber = $('#mobnum').val();
    var email = $('#email').val();
    var firstName = $('#fnam').val();
    var password = $('#pswrd').val();
    var spsrwd = $('cpswrd').val();
    var userId;
    var userObj = {};
    
    firebase.database().ref('users/').push({
        name: firstName,
        mobileNumber: mobileNumber,
        email: email,
        password: password
      }).then(pushed_user => {
          userId = pushed_user.path.pieces_[1];
          console.log(pushed_user.path.pieces_[1]);
          userObj = {
            id: userId,
            name: firstName,
            mobileNumber: mobileNumber,
            email: email,
            profilePic: ''
        } 
          sessionStorage.setItem('userobj', JSON.stringify(userObj));
          console.log(sessionStorage.getItem('userobj'));
      });
}