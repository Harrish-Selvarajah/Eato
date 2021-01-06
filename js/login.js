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
      password: childData.password
    }
    users.push(item);
    })
    console.log(users);
    // repeat();
    })
});

function login() {
    var firstName = $('#usrnm').val();
    var password = $('#pswrd').val();

    users.forEach(function(users) {
      // debugger
      if (users.name == firstName && users.password == password) {
        document.location.href = "./home.html";
      } else {
        console.log("Login error");
      }
    })



}

