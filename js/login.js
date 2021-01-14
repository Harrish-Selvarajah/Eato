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
var users = [];
var chats = [];

$(document).ready(function () {
  console.log("im here");
  firebase.database().ref('users/').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
    var item = {
      key: childSnapshot.key,
      email: childData.email,
      mobileNumber: childData.mobileNumber,
      name: childData.name,
      password: childData.password,
      favourites : childData.favourites
    }
    users.push(item);
    })
    console.log(users);
    // repeat();
    })
});

function login() {
  cart = [];
    var firstName = $('#usrnm').val();
    var password = $('#pswrd').val();

    users.forEach(function(user) {
      // debugger
     
      if (user.name == firstName && user.password == password) {
        console.log(user)
        userObj = {
          id: user.key,
          name: user.name,
          mobileNumber: user.mobileNumber,
          email: user.email,
          profilePic: ''
      }

      userObj['favourites'] = user.favourites
      sessionStorage.setItem('userobj', JSON.stringify(userObj));
      sessionStorage.setItem('cart', JSON.stringify(cart));
      sessionStorage.setItem('chats', JSON.stringify(chats));
      console.log(sessionStorage.getItem('userobj')); 
      document.location.href = "./home.html";
      } else {
        console.log("Login error");
      }
    })



}

